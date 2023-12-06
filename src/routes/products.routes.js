import { Router } from "express";
import { generateProduct } from "../helpers/mock.js";

export const productsRouter = Router();

productsRouter.get("/mockingproducts", (req, res) => {
    let mockingProducts = [];
    for (let i = 0; i < 100; i++) {
        const newProduct = generateProduct();
        mockingProducts.push(newProduct);
    };
    res.json({status:"Success", data: mockingProducts})
});