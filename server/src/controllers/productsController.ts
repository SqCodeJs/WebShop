import { Request, Response } from "express";
import { getAllProducts } from "../services/getAllproducts";

export const getProducts = async (request: Request, response: Response) => {
    try {
        const products = await getAllProducts();
        
        if (!products) {
            return response.status(400).json({
                message: "Nie ma dostępnych produktów",
            });
        }

        return response.status(200).json(products);
    } catch (error) {
        return response.status(500).json({
            error,
            message: "Wystąpił błąd w metodzie GET endpointu /products",
        });
    }
};
