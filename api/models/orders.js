const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        //몽구스에 저장되어있는 product id 값을 등록함
        ref : "product",
        //product의 id를 참조할 것임
        required : true
        // 필수값
    },
    qty :  {
        type : Number,
        default : 1
        // 기본값은 1로 설정
    }
});



module.exports = mongoose.model("order", orderSchema);