import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js"

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port, () => console.log("Servidor Ok"));

app.use("/api/products/", productsRouter);
app.use(errorHandler);