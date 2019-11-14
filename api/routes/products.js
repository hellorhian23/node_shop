const express = require("express");

const router = express.Router();

// 데이터 불러오기(products)
router.get("/", (req, res) => {
    res.json({
        msg : "successful product get"
    });
});


// 데이터 등록하기 (product)
router.post("/", (req, res) => {
    res.json({
        message : "successful product post"
    });
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
