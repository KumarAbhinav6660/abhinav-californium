const NewAuthorModel = require("../models/newAuthorModel")

const createAuthorsData = async function(req, res){
    let author = req.body
    let saveData = await NewAuthorModel.create(author)
    res.send({data : saveData})
}

module.exports.createAuthorsData = createAuthorsData