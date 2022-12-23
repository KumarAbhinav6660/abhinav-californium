const ProductModel = require('../models/productModel')

const createProductData = async function(req, res){
    let data = req.body

    let allProducts = await ProductModel.create(data)
    res.send({msg : allProducts})
}

module.exports.createProductData = createProductData