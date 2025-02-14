const route = require("express").Router();
const { post , get , login } = require("../../controllers/adminControllers");
const authMiddleware = require("../../middlewares/authMiddleware");
const { isAdmin } = require("../../middlewares/isAdmin");

route.post("/add" , post)
route.post("/login" , login)
route.get("/get", get)

module.exports = route