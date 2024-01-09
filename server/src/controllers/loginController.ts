import passport from 'passport';
import { Router } from 'express';
import { isUserInDB } from '../services/isUserInDB';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

export const postLogin = async (request: Request, response: Response) => {
    try {
        const { mail, password } = request.body;

        const user = await isUserInDB(mail);

        if (user === null) {
            return response.status(404).json({
                message: "user does not exist",
            });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return response.json({ message: err });
            }
            const payload = {
                id: user.id,
                name: user.name,
                mail: user.mail,
            };
            const secret = process.env.SESSIONS_SECRET ?? "";
            const accessToken = jwt.sign(payload, secret, {
                expiresIn: "1h",
            });
            if (result) {
                const userState = {
                    id: user.id,
                    name: user.name,
                    mail: user.mail,
                    accessToken: `Bearer ${accessToken}`,
                };
                
                return response.status(200).json({ ...userState });
            } else response.status(400).json({ message: "wrong password" });
        });
    } catch (err) {
        return response.status(500).json({
            err,
            message: "cos poszlo nie tak w metodzie post endpoit'u /login",
        });
    }
};
