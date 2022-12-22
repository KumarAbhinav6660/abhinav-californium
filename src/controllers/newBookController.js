const NewBookModel = require("../models/newBookModel")
const {isValidObjectId} = require('mongoose')

const createBooksData = async function(req, res){
    let books = req.body
    if(!books.author){
        res.send({msg : "Author name is required"})
    }
    else if(!isValidObjectId(books.author)){
        res.send({msg : "There is no author with this Id"})
    }
    else if(!books.publisher){
        res.send({msg : "Publisher name is required"})
    }
    else if(!isValidObjectId(books.publisher)){
        res.send({msg : "There is no publisher with this Id"})
    }
 
    else{
        let saveData = await NewBookModel.create(books)
        res.send({data : saveData}) 
    }
    
}

const getNewBooksData= async function (req, res) {
    let books = await NewBookModel.find().populate('author').populate('publisher')
    res.send({msg: books})
}

const getUpdatedBooks = async function(req, res){
    let allBooks = await NewBookModel.find().populate('author').populate('publisher')
    .updateMany(
        {$or : [{"publisher.name" : "Penguin"},{"publisher.name" : "HarperCollins"}]},
        {$set : {isHardCover : true}},
        {new : true}
        )
        res.send({data : allBooks})
}

const UpdatedBooksPrice = async function(req, res){
    let allBooks = await NewBookModel.find().populate('author').populate('publisher')
    .findOneAndUpdate(
        {"author.rating": {$gt : 3.5}},
        {$set : {price : 10}},
        {new : true}
        )
    res.send({msg : allBooks})
}

module.exports.createBooksData = createBooksData
module.exports.getNewBooksData = getNewBooksData
module.exports.getUpdatedBooks = getUpdatedBooks
module.exports.UpdatedBooksPrice = UpdatedBooksPrice