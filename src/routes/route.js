const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const myUserController= require("../controllers/user2Controller")
const myUserMiddleware = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)
//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.put("/users/:userId", userController.updateUser)


router.post("/myusers", myUserController.createMyUser )
router.post("/mylogin", myUserController.myloginUser)
router.get("/myusers/:userId", myUserMiddleware.authentication, myUserController.getMyUsersData)
router.put("/myusers/:userId", myUserMiddleware.authentication, myUserController.updateMyUser)
router.delete("/myusers/:userId", myUserMiddleware.authentication, myUserController.deleteMyUser)


module.exports = router;