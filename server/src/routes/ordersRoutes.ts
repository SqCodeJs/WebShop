import { Router, Request, Response } from 'express';
import { addNewOrder, getAllOrders } from '../controllers/ordersController';

const router = Router();

router.post("/new", addNewOrder);

router.get('/:userId', getAllOrders);

router.use((req: Request, res: Response) =>
    res.status(404).json({
        success: false,
        message: "Internal server error."
    })
);

export default router;