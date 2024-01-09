import { Router } from 'express';
import { getProducts } from '../controllers/productsController';
import { data } from '../DB';
import { addProductstoDB } from '../services/mountProducts';

const router = Router();

router.get("/all", getProducts);

router.get("/mount", ((req, res) => {
    addProductstoDB(data)
}));

export default router;