const AuthorModel= require("../models/authorModel")
const Book2Model= require("../models/book2Model")

const createAuthorsData = async function(req, res){
    let data = req.body
    if(data.author_id ){
        let saveData = await AuthorModel.create(data)
        res.send({msg : saveData})
    }
    else{
        res.send({msg : "We cant create data without author_id"})
    }
    
}

const getBooksData= async function (req, res) {
    let authorsId= await AuthorModel.find({author_name : "Chetan Bhagat"}).select({author_id : 1})
    let allBooks = await Book2Model.find({author_id : authorsId[0].author_id})
 
    res.send({msg: allBooks})
}

/*
find the author of “Two states” and update the book price to 100;  Send back the author_name and 
updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. 
The second will be a find query aith author_id from previous query)
*/

const getAuthorsData = async function(req, res){
    let authorId = await Book2Model.findOneAndUpdate(
        {book_name : "Two states"},
        {$set : {price : 100}},  
        {new : true}
    ).select({author_id : 1 , _id : 0})
    // console.log(authorId);
    let authorName = await AuthorModel.find({author_id : authorId.author_id}).select({author_name : 1, _id : 0})
    res.send({msg : authorName})
}


module.exports.getBooksData = getBooksData
module.exports.createAuthorsData = createAuthorsData
module.exports.getAuthorsData = getAuthorsData