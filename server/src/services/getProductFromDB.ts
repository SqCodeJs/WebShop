import { RowDataPacket } from "mysql2";
import db from "../config/db";

interface Product {
    id: number;
    name: string;
    price: number;
}

export const getProductFromDB = (
    id: number,
    quantity: number
): Promise<Product | null> => {
    return new Promise<Product | null>((resolve, reject) => {
        const sqlSelect = "SELECT * FROM ShopProducts WHERE id = ?";
        db.query(sqlSelect, [id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            const rows = result as RowDataPacket[];
            if (rows.length > 0) {
                const product: Product = {
                    id: rows[0].id,
                    name: rows[0].name,
                    price: rows[0].price,
                };
                resolve(product);
            } else {
                resolve(null);
            }
        });
    });
};
