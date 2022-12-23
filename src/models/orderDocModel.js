const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderDocSchema = new mongoose.Schema({
    userId: {
        type : ObjectId,
        ref : 'UserDocument'
    },
	productId: {
        type : ObjectId,
        ref : 'Product'
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String
})

module.exports = mongoose.model('OrderDucument', orderDocSchema)