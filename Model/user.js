const mongoose = require("mongoose");

const userdataSchema = mongoose.Schema({
    userId: {
        type: Number
    },
    username: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    phone: {
        type: Number
    }
})

const singup= mongoose.model("user",userdataSchema)
module.exports =singup;