const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobileNumber : String,
    DOB : Date,
    emailID : String,
    address : String,
    customerID : String,
    status : String,
    isDelete : {
        type : Boolean,
        default : false
    }
}, { timestamps: true });

module.exports = mongoose.model('customerCollections', customerSchema) 
