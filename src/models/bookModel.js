const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName : String,
    authorName : String,
    category : String,
    year : {
        type : Number,
        enum : [2017,2018,2019,2020,2021,2022]
    }
}, { timestamps: true })
 


module.exports = mongoose.model("Book", bookSchema)  //books 