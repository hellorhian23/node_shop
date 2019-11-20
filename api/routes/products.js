const express = require("express");

const router = express.Router();

const productModel = require("../models/products");


// 데이터 불러오기(products)
router.get("/", (req, res) => {
    res.json({
        msg : "successful product get"
    });
});


// 데이터 등록하기 (product)
router.post("/", (req, res) => {

    const product = new productModel({
        name: req.body.productName,
        price : req.body.productPrice
    });

    product
        .save()
        .then(doc =>{
            res.json({
                message : "registered product",
                productInfo : doc
            });
        })
        .catch(err => {
            res.json({
                // 메세지 문구 설정할 경우 "" 명령어 설정
                // 하단의 명령어는 err 임을 보여줌
                msg : err.message
            });
        });


   //command + / (하고자 하는 영역) : 주석처리 (컴퓨터가 읽지 못함, build 안함)
    // const product = {
    //     name : req.body.productName,
    //     price : req.body.productPrice
    // };

    // res.json({
    //     message : "successful product post",
    //     productInfo : product
    // });

});


//데이터 수정하기 (product)
router.patch("/", (req, res) => {
    res.json({
        message : "successful product modify"
    });
});


//데이터 삭제하기 (product)
router.delete("/", (req, res) => {
    res.json({
        message : "successful product delete"
    });
});





module.exports = router;
