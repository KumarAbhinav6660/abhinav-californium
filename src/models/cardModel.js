const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema( {
    cardNumber : String,
    cardType : String,
    customerName : String,
    status : {
        type : String,
        default : "ACTIVE"
    }, 
    vision : String,  
    customerID : {
        type : ObjectId,
        ref : 'customerCollections'
    }
     
}, { timestamps: true }); 

module.exports = mongoose.model('cardCollection', cardSchema) 
