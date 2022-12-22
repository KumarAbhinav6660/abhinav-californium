const NewBookModel = require("../models/newBookModel")
const NewPublisherModel = require("../models/newPublisher.model")

const {isValidObjectId} = require('mongoose')
const newAuthorModel = require("../models/newAuthorModel")

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

    let publisher = (await NewPublisherModel.find({name: {$in: ['Penguin','HarperCollins']}}))
    .map(publisher=>publisher._id)

    let update1 = await NewBookModel.updateMany(
        {publisher: {$in: publisher}},
        {$set: {isHardCover:true}},
        {new:true}
    );
    res.send({msg: "New key added",data:update1})


    let author = (await newAuthorModel.find({rating: {$gt:3.5}})).map(author=>author._id);
    let update = await NewBookModel.updateMany(
        {author: {$in: author}},
        {$inc: {price:10}}
    );
    // res.send({msg:"Price Updated",data:update});



    // const publishers = await newPublisherModel.find({name:{$in:["Penguin","HarperCollins"]}})
    // const publishersId = publishers.map(publisher => publisher._id)

    // const updateData = await NewBookModel.updateMany(
    //     {publisher:{$in: publishersId}},
    //     {$set : {isHardCover : false}},
    //     {new : true}
    // )
    // res.send({updateData})
}


module.exports.createBooksData = createBooksData
module.exports.getNewBooksData = getNewBooksData
module.exports.getUpdatedBooks = getUpdatedBooks