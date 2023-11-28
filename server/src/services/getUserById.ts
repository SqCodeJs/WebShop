import { RowDataPacket } from "mysql2";
import db from "../config/db";

interface User {
    id: number;
    name: string;
    mail: string;
    pass: string;
}

export const getUserById = (id: number): Promise<User | null> => {
    return new Promise<User | null>((resolve, reject) => {
        const sqlInsert = "SELECT * FROM ShopUsers WHERE id = ?";
        db.query(sqlInsert, [id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            const rows = result as RowDataPacket[];
            if (rows.length > 0) {
                const user: User = {
                    id: rows[0].id,
                    name: rows[0].name,
                    mail: rows[0].mail,
                    pass: rows[0].password,
                };
                resolve(user);
            } else {
                resolve(null);
            }
        });
    });
};
