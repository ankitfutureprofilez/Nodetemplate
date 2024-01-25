const Products= require("express").Router();
const productcontroller = require("../controller/Productcontroller")
Products.post("/product/add",productcontroller.productadd);
Products.get('/product/show',productcontroller.productshow);
Products.put('/product/update/:id',productcontroller.prouctupdate)
Products.delete('/product/delete/:id',productcontroller.productdelete)


module.exports=Products;