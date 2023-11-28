import { Router, Request, Response } from 'express';
import passport from 'passport';
import { postLogin } from '../controllers/loginController';
interface User {
    id: number;
    name: string;
    mail: string;
}

const router = Router();

router.post("/", postLogin);

router.get(
    "/current",
    passport.authenticate("jwt", { session: false }),
    (req: Request, res: Response) => {
        const user = req.user as User;
        res.json({ id: user?.id, name: user?.name, mail: user?.mail });
    }
);

router.use((req: Request, res: Response) =>
    res.status(404).json({
        message: "Nie znaleziono metody w endpoint'cie /login",
    })
);

export default router;
