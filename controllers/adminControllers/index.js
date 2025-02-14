const Admin = require("../../models/adminModels")
const sendResponse = require("../../utills/responseHandler")
const jwt = require("jsonwebtoken")

exports.post = async ( req , res ) => {
    try {
        const newPost = await Admin.create(req.body)
        const token = jwt.sign(
            { userId: newPost._id },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );
        sendResponse(res, 200, true, "Added Successfully", {newPost , token});
    } catch (error) {
        sendResponse(res, 200 , false , "Error While adding admin", error.message )
    }
}
exports.login = async ( req , res ) => {
    try {
        const { email , password } = req.body

        const isExist = await Admin.findOne({email});
         if(!isExist.email){
            return sendResponse(res , 200 , false , "Please Signup First", null)
         }
         else if(isExist.password !== password){
            return sendResponse(res , 200 , false , "Invalid Credentials", null)
         }
         else{
            const token = jwt.sign(
                { userId: isExist._id },
                process.env.JWT_SECRET,
                { expiresIn: "30d" }
            );

            sendResponse(res, 200, true, "Login Successfully", {isExist , token});
         }
   
    } catch (error) {
        sendResponse(res, 200 , false , "Error While adding admin", error.message )
    }
}

exports.get = async ( req , res ) => {
         try {
            const allPosts = await Admin.find()

            sendResponse(res , 200 , true , "retreived All Data" , allPosts)
         } catch (error) {
            sendResponse(res , 200 , false , "Error While getting " , error.message)
         }
}