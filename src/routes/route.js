const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const Book2Controller = require("../controllers/book2Controller")
const authorController = require("../controllers/authorController")

const CustomerController = require("../controllers/customerController")
const CardController = require("../controllers/cardController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})


router.post("/createAuthorsData", authorController.createAuthorsData)
router.post("/createBooksData", Book2Controller.createBooksData)
router.get("/getBooks2Data", authorController.getBooksData)
router.post("/getAuthorsData", authorController.getAuthorsData)
router.get("/getAuthorsName", Book2Controller.getAuthorsName)

 
router.post("/createCustomersData", CustomerController.createCustomersData) 
router.get("/getCustomersList", CustomerController.getCustomersData)
router.post("/deleteCustomerData", CustomerController.deleteCustomersData)

router.post("/createCardData", CardController.createCardsData)

module.exports = router; 