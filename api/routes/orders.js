const express = require("express");

const router = express.Router();

const orderModel = require("../models/orders");

const productModel = require("../models/products");

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


    productModel
        .findById({_id: req.body.product_ID})
        .exec()
        .then(product => {
            if(!product){
                res.json({
                    message : "No product ID"
                });

            } else {
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
            
            }
        })
        .catch(err =>{
            res.json({
                message : err.message
            });
        });


    
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
