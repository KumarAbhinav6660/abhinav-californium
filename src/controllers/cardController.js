const CardModel = require("../models/cardModel")
const CustomerModel = require("../models/customerModel")

const createCardsData = async function(req, res){
    let data = req.body
    let saveData = await CardModel.create(data)
    res.send({msg : saveData})
}

const getCardData = async function(req, res){
    let allCards = await CardModel.find().select({_id : 0})
    res.send({data : allCards})
}

module.exports.createCardsData = createCardsData
module.exports.getCardData = getCardData