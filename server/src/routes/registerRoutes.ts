const { Router } = require("express");
const db = require("../config/db");
const {
    putRegister,
    submitNewUser,
} = require("../controllers/registerController");
const router = Router();
import { Request, Response } from 'express';

router.put("/", putRegister);
// router.post("/", );

router.use((request: Request, response: Response) =>
    response.status(404).json({
        message: "nie znaleziono metody w endpoint'cie /register",
    })
);

export default router;
