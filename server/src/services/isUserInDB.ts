import db from "../config/db";
import { QueryError, RowDataPacket } from "mysql2";
import {Account} from '../../../shared/types/commonTypes'

interface User {
    id: number;
    name: string;
    mail: string;
    password: string;
}

export const isUserInDB = (mail: string): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const sqlInsert = "SELECT * FROM ShopUsers WHERE mail = ?";
        db.query(sqlInsert, [mail], (err: QueryError | null, result: RowDataPacket[]) => {
            console.log("res", result)
            if (err) {
                console.error("Error executing SQL query:", err);
                reject(err)
                return;
            }

            if (result.length > 0) {
                const user: User = {
                    id: result[0].id,
                    name: result[0].name,
                    mail: result[0].mail,
                    password: result[0].password,
                };
                resolve(user);
            } else {
                resolve(null);
            }
        });
    });
};
