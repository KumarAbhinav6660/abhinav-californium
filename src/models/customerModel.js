const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const customerSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobileNumber : {
        type : String,
        minlength: 10,
        maxlength: 10
    },
    DOB : Date,
    emailID : String,
    address : String,
    customerID : {
        type : ObjectId,
        ref : "cardCollection"
    },
    status : String,
    isDelete : {
        type : Boolean,
        default : false  
    }
}, { timestamps: true });

module.exports = mongoose.model('customerCollections', customerSchema) 
