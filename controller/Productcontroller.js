const Products = require("../Model/Product");
const Users = require("../Model/user");


exports.productadd = async (req, res) => {

    try {
        // const userId = req.Users.userId;
        // console.log("userId",userId)
        const { name, img, price, discount, Emi, descrption, role } = req.body;
        const lastProduct = await Products.findOne({}, "productId").sort({ productId: -1 });
        const newproductId = lastProduct ? lastProduct.productId + 1 : 1;
        const record = new Products({
            name: name,
            img: img,
            price: price,
            productId: newproductId,
            discount: discount,
            Emi: Emi,
            descrption: descrption,
            role: role,
        });
        const result = await record.save();
        res.json({
            data: result,
            status: true,
            msg: "product Add",
        });
    } catch (error) {
        res.json({
            error: error,
            msg: "product not add",
            status: false,
        });
    }
};


exports.productshow = async (req, res) => {
    try {
        const record = await Products.find();
        res.json({
            result: record,
            status: true,
            msg: "Product Show"
        })
    } catch (error) {
        res.json({
            error: error,
            msg: "Not Show Product",
            status: false
        })
    }
}

exports.prouctupdate = (async (req, res) => {
    console.log("req.params.id ", req.params.id)
    console.log("req.body", req.body)
    try {
        const id = req.params.id
        console.log("idsaaa", id)
        const { name, img, price, discount, Emi, descrption, role } = req.body
        const record = await Products.findByIdAndUpdate(id, {
            img: img,
            role: role,
            description: descrption,
            price: price,
            discount: discount,
            name: name
        })
        res.json({
            data: record,
            msg: "success",
            status: true
        })
    } catch (error) {
        console.log("erorr", error);
        res.json({
            error: error,
            status: false,
            msg: "Not Listing Product"
        })
    }
})

exports.productdelete = async(req, res) => {
    const id = req.params.id;
    console.log("req.params.id", id);
    try {
        const id = req.params.id;
        console.log("id", id);
        const record = await Products.findByIdAndDelete(id);
        res.json({
            data: record,
            msg: "Success",
            status: true
        });
    } catch (error) {
        res.json({
            error: error,
            msg: "Internal Server Error",
            status: false
        });
    }
};
