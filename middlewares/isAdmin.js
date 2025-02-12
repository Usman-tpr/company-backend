const adminModels = require("../models/adminModels")
const sendResponse = require("../utills/responseHandler")

exports.isAdmin = async ( req , res , next ) => {
    const admin = await adminModels.findById(req.user.userId)
    
    if(admin.role === "admin"){
       return  next()
    }
    else {
        sendResponse(res , 200 , false , "You need admin for this", )
    }
    
}