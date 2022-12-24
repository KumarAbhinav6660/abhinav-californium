const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

const UserDocController = require("../controllers/userDocController")
const OrderController = require("../controllers/orderController")
const ProductController = require("../controllers/productDocController")
const userMW = require("../middlewares/usermiddleware")
const IdMW = require("../middlewares/validationMiddleware")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)


router.post("/createUser", userMW.preUserValidation,UserDocController.createUserDoc)
router.post("/createOrder", userMW.preUserValidation, IdMW.idValidation, OrderController.createOrderDoc)
router.post("/createProductData", ProductController.createProductData)
router.get("/getOrdersData", OrderController.getOrdersData)




module.exports = router;