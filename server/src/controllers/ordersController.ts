import { createOrder } from "../services/createOrder";
import { User, PartialBasketItem } from "../../../shared/types/commonTypes";
import { Request, Response } from 'express';
import { getUserOrders } from "../services/getUserOrders";

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const userId = +req.params.userId;
        const result = await getUserOrders(userId);

        res.json({ success: true, orders: result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export const addNewOrder = async (req: Request, res: Response) => {
    try {
        const items: PartialBasketItem[] = req.body.items;
        const totalPrice: number = req.body.totalPrice;
        const user = req.user as User;

        const orderID = await createOrder(user.id, items, totalPrice);

        if (orderID !== null) {
            res.status(200).json({ success: true, orderID, message: `Created order. number: ${orderID} ` });
        } else {
            res.status(500).json({ success: false, message: "Failed to create order." });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
};