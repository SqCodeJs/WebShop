import db from '../config/db';
import { OkPacket, RowDataPacket } from 'mysql2';
import { PartialBasketItem } from '../../../shared/types/commonTypes';

const createOrderHeader = async (userID: number, totalPrice: number): Promise<number> => {
    console.log("totalPrice", totalPrice)
    const [order] = await db.promise().query<OkPacket>(
        'INSERT INTO Orders (UserID, totalPrice, OrderDate) VALUES (? , ?, NOW())', [userID, totalPrice]
    );
    return order.insertId;
};

const updateProductStockAndSold = async (productID: number, quantity: number): Promise<void> => {
    const [productResult] = await db.promise().query<RowDataPacket[]>(
        'SELECT stock, sold FROM Products WHERE id = ?',
        [productID]
    );

    if (Array.isArray(productResult) && productResult.length > 0) {
        const currentStock = productResult[0].stock;
        const currentSold = productResult[0].sold;

        const newStock = currentStock - quantity;
        const newSold = currentSold + quantity;

        await db.promise().query(
            'UPDATE Products SET stock = ?, sold = ? WHERE id = ?',
            [newStock, newSold, productID]
        );
    }
};

const createOrderDetails = async (orderID: number, item: PartialBasketItem) => {
    await db.promise().query(
        'INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Worth) VALUES (?, ?, ?, ?)',
        [orderID, item.id, item.quantity, item.worth]
    );
};


export const createOrder = async (userID: number, items: PartialBasketItem[], totalPrice: number): Promise<number | null> => {
    try {
        await db.promise().beginTransaction();

        const orderID = await createOrderHeader(userID, totalPrice);

        items.forEach(async (item: PartialBasketItem) => {
            await updateProductStockAndSold(item.id, item.quantity);
            await createOrderDetails(orderID, item);
        });

        await db.promise().commit();

        return orderID;
    } catch (error) {
        await db.promise().rollback();
        console.error('Error creating order:', error);
        return null;
    }
};