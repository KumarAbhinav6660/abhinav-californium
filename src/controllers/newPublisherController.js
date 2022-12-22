const NewPublisherModel = require("../models/newPublisher.model")

const createPublishersData = async function(req, res){
    let publisher = req.body
    let saveData = await NewPublisherModel.create(publisher)
    res.send({data : saveData})
}

module.exports.createPublishersData = createPublishersData