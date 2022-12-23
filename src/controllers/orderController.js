const OrderModel = require('../models/orderDocModel')
const UserModel = require("../models/userDocModel")
const ProductModel = require("../models/productModel")

const {isValidObjectId} = require('mongoose')

const createOrderDoc = async function(req, res){
    let orders = req.body
    if(!orders.userId){
        res.send({msg : "UserId is required"})
    }
    if(!isValidObjectId(orders.userId)){
        res.send({msg : "There is no user with this Id"})
    }
    if(!orders.productId){
        res.send({msg : "ProductId is required"})
    }

    if(!isValidObjectId(orders.productId)){
        res.send({msg : "There is no product with this Id"})
    }


    let headerData = req.headers["isfreeuser"]
    let orderData = req.body;
    let productData = await ProductModel.findById(orderData.productId)
    let userData = await UserModel.findById(orderData.userId)


    if (headerData === "true") {
        orderData.amount = 0
        orderData.isFreeAppUser = "true"
    }

    if (headerData === "false") {
        if (userData.balance >= productData.price) {
            await UserModel.findByIdAndUpdate(orderData.userId,
                { $inc: { balance: -(productData.price) }},
                {new: true }
            )
            orderData.isFreeAppUser = "false"
            orderData.amount = productData.price
        } else {
            return res.send("User haven't Sufficient Balance to buy Product.")
        }
    }

    let orderCreatedData = await OrderModel.create(orderData);
    res.send({ data: orderCreatedData });
}



const getOrdersData = async function(req, res){
    let allOrders = await OrderModel.find().populate('userId').populate('productId')
    res.send({data : allOrders})
}

module.exports.createOrderDoc = createOrderDoc 
module.exports.getOrdersData = getOrdersData
