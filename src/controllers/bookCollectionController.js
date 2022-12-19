const bookCollectionModel = require("../models/bookCollection")

const createBookCollection = async function (req, res) {
    let data= req.body

    let savedData= await bookCollectionModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function (req, res){
    let allBooks= await bookCollectionModel.find().select({bookName : 1, authorName : 1, _id : 0}) 
    res.send({msg: allBooks})
}

const getBooksinYear = async function(req,res){ 
    let yearFromRequest = req.query.year
    let allBooks = await bookCollectionModel.find({year : yearFromRequest})
    res.send({msg: allBooks})
}


const getParticularBooks = async function(req, res){
    let bName = req.query.bookName 
    let bYr = req.query.year
    let bAuthorName = req.query.authorName
    let bPages = req.query.totalPages
    let bStock = req.query.isStockAvailable
    let bPrice = req.query.price
    
    let allBooks = await bookCollectionModel.find({$or: [{bookName:bName},{year:bYr},{authorName:bAuthorName},
    {totalPages : bPages},{isStockAvailable : bStock},{"prices.indianPrice":bPrice}]})
    .select({bookName : 1, authorName : 1, year : 1,totalPages:1,isStockAvailable:1,"prices.indianPrice":1,_id : 0})
    res.send({msg: allBooks})
}
 
const getINRBooks = async function(req, res){ 
    let allBooks = await bookCollectionModel.find({"prices.indianPrice":{$in:["100 INR","200 INR","500 INR"]}})
    res.send({msg : allBooks})
}

const getRandomBooks = async function(req, res){
    let allBooks = await bookCollectionModel.find({$or : [{isStockAvailable : true},{totalPages:{$gt: 500}}]})
    res.send({msg : allBooks})
}
 

module.exports.createBookCollection = createBookCollection
module.exports.bookList = bookList
module.exports.getBooksinYear = getBooksinYear
module.exports.getParticularBooks = getParticularBooks 
module.exports.getINRBooks = getINRBooks
module.exports.getRandomBooks = getRandomBooks