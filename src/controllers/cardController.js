const CardModel = require("../models/cardModel")
const CustomerModel = require("../models/customerModel")

const createCardsData = async function(req, res){
    let data = req.body
    let saveData = await CardModel.create(data)
    res.send({msg : saveData})
}

module.exports.createCardsData = createCardsData