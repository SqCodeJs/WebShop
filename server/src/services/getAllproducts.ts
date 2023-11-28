import db from "../config/db";

export const getAllProducts = (): Promise<unknown> => {
    return new Promise<unknown>((resolve, reject) => {
        const dbQuery = "SELECT * FROM Products";
        db.query(dbQuery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
