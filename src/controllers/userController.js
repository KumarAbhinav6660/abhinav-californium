const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    // Hey UserModel go and create a database of this data
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    // hey userModel go to database and find all the entries inside the database
    // of user collection 
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


 
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData