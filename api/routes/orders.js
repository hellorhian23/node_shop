const express = require("express");

const router = express.Router();

const orderModel = require("../models/orders");

//장바구니 불러오기
router.get("/", (req, res) => {
   
   orderModel
    .find()
    .exec()
    .then(docs => {
        res.json({
            message : "successful orders get",
            count : docs.length,
            orders : docs
        });
    })
    .catch(err => {
        res.json({
                message : err.message
        });
    });


    // res.json({
    //     message : "Hellorhian"

    // });
});

//장바구니 등록하기
router.post("/", (req, res) => {

    const order = new orderModel({
        product : req.body.product_ID,
        qty : req.body.qty
    });

    order
        .save()
        .then(result => {
            res.json({
                message : "successful order stored",
                orderInfo : result
            });
        })
        .catch(err => {
            res.json({
                message : err.message
            });
        });

    // const order ={
    //     name : req.body.productName,
    //     qty : req.body.qty
    // };


    // res.json({
    
    //     message : "successful add",
    //     orderInfo : order
    // });
});

//장바구니 삭제하기
router.delete("/", (req, res) => {
    res.json({
        message : "successful delete"
    });
});

//장바구니 수정하기
router.put("/", (req, res) => {
    res.json({
        message : "successful modify"
    });
});

module.exports = router;
