const CardModel = require("../models/cardModel")
const CustomerModel = require("../models/customerModel")

const createCustomersData = async function(req, res){
    let data = req.body
    let saveData = await CustomerModel.create(data)
    res.send({msg : saveData})
}



const getCustomersData = async function(req, res){
    let allCustomers = await CustomerModel.find({status : "ACTIVE", isDelete : "false"})
    .populate('customerID').select({isDelete : 0})
    res.send({msg : allCustomers})
}

const deleteCustomersData = async function(req, res){
    let data = req.body
    let allCustomers = await CustomerModel.findOneAndUpdate(
        {firstName : data.firstName, lastName : data.lastName},
        {$set : {isDelete : true}},
        {new : true}
        )
    res.send({msg : allCustomers})
}

module.exports.createCustomersData = createCustomersData
module.exports.getCustomersData = getCustomersData
module.exports.deleteCustomersData = deleteCustomersData