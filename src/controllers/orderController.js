const OrderModel = require('../models/orderDocModel')
const UserModel = require("../models/userDocModel")

const createOrderDoc = async function(req, res){
    let data = req.body

    let ID = req.body.userId
    console.log(ID);
    let order = req.headers["isfreeuser"]
    // data.isFreeAppUser = order

    let allOrders = await OrderModel.create(data)

    // await OrderModel.findOneAndUpdate(
    //     {isFreeAppUser : "true"},
    //     {$set : {amount : 0}}
    // )

    if(order == "true"){
        
        let updatedData = await OrderModel.findOneAndUpdate(
             {userId : ID},
             {$set : {amount : 0}},
             {new : true, upsert : true}
         )
         res.send({msg : updatedData})
     }

    // res.send({msg : allOrders})
}



const getOrdersData = async function(req, res){
    let allOrders = await OrderModel.find().populate('userId').populate('productId')
    res.send({data : allOrders})
}

module.exports.createOrderDoc = createOrderDoc
module.exports.getOrdersData = getOrdersData
