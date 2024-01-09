import { Router, Request, Response } from 'express';
import { postLogin } from '../controllers/loginController';
interface User {
    id: number;
    name: string;
    mail: string;
}

const router = Router();

router.post("/", postLogin);

router.use((req: Request, res: Response) =>
    res.status(404).json({
        message: "Nie znaleziono metody w endpoint'cie /login",
    })
);

export default router;
