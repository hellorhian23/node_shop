const express = require("express");
const app = express();

const productsRouter = require("./api/routes/products");

const orderRouter = require("./api/routes/orders");

app.use("/orders", orderRouter);

app.use("/products", productsRouter);

const port = 5000;


app.listen(port, console.log("server started"));