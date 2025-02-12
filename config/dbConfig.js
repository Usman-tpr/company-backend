const mongoose = require("mongoose")
// Connect to the database

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("Connected to the database");
        }).catch((err) => {
            console.log("Error while connecting to database", err);
        });
    } catch (error) {
         console.log(error)
    }
}

module.exports = connectDB

