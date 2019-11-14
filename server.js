const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// 라우터 루트
const productsRouter = require("./api/routes/products");
const orderRouter = require("./api/routes/orders");
const userRouter = require("./api/routes/users");



// DB connect
const db_url = "mongodb+srv://Rhian:1234@cluster0-h6nuf.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(db_url, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("db connected ... "))
    .catch(err => console.log(err.message)); // 에러 발생 시 에러 로그를 찍어줌

// Bodyparser 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// 라우팅
app.use("/orders", orderRouter);
app.use("/products", productsRouter);
app.use("/users", userRouter);






const port = 5000;
app.listen(port, console.log("server started"));