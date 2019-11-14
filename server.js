const express = require("express");
const app = express();

// 라우터 루트
const productsRouter = require("./api/routes/products");
const orderRouter = require("./api/routes/orders");
const userRouter = require("./api/routes/users");

// 라우팅
app.use("/orders", orderRouter);
app.use("/products", productsRouter);
app.use("/users", userRouter);






const port = 5000;
app.listen(port, console.log("server started"));