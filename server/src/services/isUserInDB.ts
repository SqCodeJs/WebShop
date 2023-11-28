// Importy
import db from "../config/db";
import { QueryError } from "mysql2";

// Definicja interfejsu
interface User {
    id: number;
    name: string;
    mail: string;
    password: string;
}

// Funkcja sprawdzająca, czy użytkownik istnieje w bazie danych
export const isUserInDB = (mail: string): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const sqlInsert = "SELECT * FROM ShopUsers WHERE mail = ?";
        db.query(sqlInsert, [mail], (err: QueryError | null, result: any) => {
            if (err) {
                console.error("Error executing SQL query:", err);
                resolve(null);
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
