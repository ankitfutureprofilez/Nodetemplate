const mongoose = require("mongoose")

const productschecma = mongoose.Schema({
    productId:{
        type:Number
    }  ,
    name: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: String
    },
    discount: {
        type: String
    },
    Emi: {
        type: String
    },
    descrption:{
        type:String
    },
    userId: Number,
    role: { type: String, default: "Active" },
})

const product =mongoose.model("product",productschecma);

module.exports =product;

