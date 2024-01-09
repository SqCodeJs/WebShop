const { Router } = require("express");
import { Request, Response } from 'express';
import { postLogin } from '../controllers/loginController';
import  {
    putRegister,
} from "../controllers/registerController";

const router = Router();

router.put("/register", putRegister);
router.post("/login", postLogin);

router.use((request: Request, response: Response) =>
    response.status(404).json({
        message: "nie znaleziono metody w endpoint'cie /register",
    })
);

export default router;
