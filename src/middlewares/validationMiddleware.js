const {isValidObjectId} = require('mongoose')

const idValidation = function(req, res, next){
    let orderData = req.body;
    if(!orderData.userId){
        res.send({msg : "UserId is required"})
    }
    else if(!isValidObjectId(orderData.userId)){
        res.send({msg : "There is no user with this Id"})
    }
    else if(!orderData.productId){
        res.send({msg : "ProductId is required"})
    }

    else if(!isValidObjectId(orderData.productId)){
        res.send({msg : "There is no product with this Id"})
    }

    else{
        next()
    }

}

module.exports.idValidation = idValidation