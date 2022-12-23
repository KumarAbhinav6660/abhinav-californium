const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const Book2Controller = require("../controllers/book2Controller")
const authorController = require("../controllers/authorController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )
// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)


// router.post("/createAuthorsData", authorController.createAuthorsData)
// router.post("/createBooksData", Book2Controller.createBooksData)
// router.get("/getBooks2Data", authorController.getBooksData)
// router.post("/getAuthorsData", authorController.getAuthorsData)
// router.get("/getAuthorsName", Book2Controller.getAuthorsName)




const CustomerController = require("../controllers/customerController")
const CardController = require("../controllers/cardController")
 
router.get("/getCustomersList", CustomerController.getCustomersData)
router.delete("/deleteCustomerData", CustomerController.deleteCustomersData)
router.post("/createCustomersData", CustomerController.createCustomersData) 

router.get("/getCardsData", CardController.getCardData)
router.post("/createCardData", CardController.createCardsData)

module.exports = router; 