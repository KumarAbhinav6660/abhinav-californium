const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const bookCollection = require("../controllers/bookCollectionController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  ) 
router.get("/getBooksData", BookController.getBooksData)


router.post("/createBookCollection", bookCollection.createBookCollection  )
router.get("/getBookList", bookCollection.bookList)
router.get("/getBooksInYear", bookCollection.getBooksinYear)
router.get("/getParticularBooks", bookCollection.getParticularBooks) 
router.get("/getINRBooks", bookCollection.getINRBooks)
router.get("/getRandomBooks", bookCollection.getRandomBooks)
 
module.exports = router;  