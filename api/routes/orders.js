const express = require("express");

const router = express.Router();

//장바구니 불러오기
router.get("/", (req, res) => {
    res.json({
        message : "Hellorhian"

    });
});

//장바구니 등록하기
router.post("/", (req, res) => {
    res.json({
        message : "successful add"
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
