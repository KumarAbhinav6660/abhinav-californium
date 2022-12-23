const UserModel = require('../models/userDocModel')

const createUserDoc = async function(req, res){
    let data  = req.body
    let User = req.headers["isfreeuser"]
    data.isFreeUser = User

    let allUsers = await UserModel.create(data)
    res.send({msg : allUsers})
}

module.exports.createUserDoc = createUserDoc