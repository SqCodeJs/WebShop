import { Router } from 'express';
import { getProducts } from '../controllers/productsController';
import { data } from '../DB';
import { addProductsToDB } from '../services/mountProducts';

const router = Router();

router.get("/all", getProducts);

router.get("/mount", ((req, res) => {
    addProductsToDB(data)
}));

export default router;