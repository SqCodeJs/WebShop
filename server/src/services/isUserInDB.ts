const db = require("../config/db.js");

interface User {
    id: number;
    name: string;
    mail: string;
    password: string;
}

export const isUserInDB = (mail: string): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const sqlInsert = "SELECT * FROM ShopUsers WHERE mail = ?";
        db.query(sqlInsert, [mail], (err: unknown, result: User[]) => {
            if (result.length > 0) {
                const user: User = {
                    id: result[0].id,
                    name: result[0].name,
                    mail: result[0].mail,
                    password: result[0].password,
                };
                resolve(user);;
            } else resolve(null);
        });
    });
};
