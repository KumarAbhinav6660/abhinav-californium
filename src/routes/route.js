const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const newAuthorController = require("../controllers/newAuthorController");
const newPublisherController = require("../controllers/newPublisherController")
const newBookController = require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)
router.post("/createBook", bookController.createBook  ) 
router.get("/getBooksData", bookController.getBooksData) 
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createAuthorsData", newAuthorController.createAuthorsData)
router.post("/createPublishersData", newPublisherController.createPublishersData)
router.post("/createBooksData", newBookController.createBooksData)
router.get("/getNewbooksData", newBookController.getNewBooksData)
router.put("/getUpdatedBooks", newBookController.getUpdatedBooks)


module.exports = router;