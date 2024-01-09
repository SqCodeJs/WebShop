import { isUserInDB } from "../services/isUserInDB";
import { submitNewUser } from "../services/submitNewUser";
import { Request, Response } from 'express';

export const putRegister = async (request: Request, response: Response) => {
    try {
        const { name, lastName, mail, password } = request.body;

        const user = await isUserInDB(mail);

        if (user) {
            return response.status(400).json({
                message: "user with this mail already exists",
            });
        }

        await submitNewUser(name, lastName, mail, password);

        return response.status(200).json({ message: "New user is Added" });
    } catch (error) {
        return response.status(500).json({
            error: error,
            message: "Internal server error."
        });
    }
};
