import { faker } from "@faker-js/faker";
// Importar errores
import { CustomError } from "../service/customErrore.service.js";
import { EError } from "../enums/EError.js";
import { productCreateError } from "../service/productCreateError.service.js";
import { productIdParamError } from "../service/invalidParamError.service.js"

let products = [];

export class ProductsController{
    static createProduct = (req, res ) => {
        const {title, description, price, stock, code, img} = req.body;
        if(!title || !description || !price || !stock || !code || !img){
            CustomError.createError({
                name: "Create user error",
                cause: productCreateError(req.body),
                message: "Datos invalidos para crear el usuario",
                errorCode: EError.INVALID_BODY_JSON
            });
        }

        const newProduct = {
            id: faker.database.mongodbObjectId,
            title,
            description,
            price,
            stock,
            code,
            img
        };

        products.push(newProduct);
        res.json({status: "success", message: "Producto Creado", data: newProduct})
    };

    static getProduct = (req, res) => {
        const productId = req.params.uid;
        if(!productId){
            CustomError.createError({
                name: "Get product error",
                cause: productIdParamError(productId),
                message: "ID Invalido",
                errorCode: EError.INVALID_PARAM
            });
        };

        const product = products.find( product => product.id === parseInt(productId));
        res.json({status:"success", message: "Producto Encontrado", data: product});
    };
};