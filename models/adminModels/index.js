const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Admin" , schema)