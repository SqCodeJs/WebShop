import db from '../config/db';
import { RowDataPacket } from 'mysql2';

export const getUserOrders = async (id: number) => {
    try {
        return await db.promise().query<RowDataPacket[]>(
            `SELECT
            O.OrderID,
            O.OrderDate,
            O.totalPrice,
            JSON_ARRAYAGG(
              JSON_OBJECT(
                'id', P.id,
                'name', P.title,
                'price', P.price,
                'quantity', OD.Quantity,
                'totalValue', OD.Quantity * P.price
              )
            ) AS products
          FROM
            Orders O
          JOIN
            OrderDetails OD ON O.OrderID = OD.OrderID
          JOIN
            Products P ON OD.ProductID = P.id
          WHERE
            O.UserID = ?
          GROUP BY
            O.OrderID;
          `,
        [id]
      );
    } catch (error) {
        console.error('Error:', error);
    }
}