const express = require("express");

const router = express.Router();

//회원정보 불러오기
router.get("/", (req, res) => {
    res.json({
        message : "successful user joined"
    });
});
//회원정보 수정

//회원정보 삭제



module.exports = router;
