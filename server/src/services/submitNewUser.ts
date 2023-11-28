import db from "../config/db";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const submitNewUser = (
    name: string,
    lastName: string,
    mail: string,
    password: string
): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        const sqlInsert =
            "INSERT INTO ShopUsers (name,lastName,mail,password) VALUES (?,?,?,?)";

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log("bcrypt err", err);
                reject(err);
                return;
            }

            db.query(sqlInsert, [name, lastName, mail, hash], (err, result) => {
                console.log("rejstacja uzdkownika", err, result);
                if (err) {
                    reject(err);
                } else {
                    resolve(1);
                }
            });
        });
    });
};
