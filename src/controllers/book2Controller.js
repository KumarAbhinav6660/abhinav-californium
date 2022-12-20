const Book2Model= require("../models/book2Model")
const AuthorModel= require("../models/authorModel")

const createBooksData = async function(req, res){
    let data = req.body
    if(data.author_id ){
        let saveData = await Book2Model.create(data)
        res.send({msg : saveData})
    }
    else{
        res.send({msg : "We cant create data without author_id"})
    }
    
}

const getAuthorsName =  async function(req,res){
    let books = await Book2Model.find( { price : { $gte: 50, $lte: 100} } )
    .select({ author_id :1,book_name:1,_id:0});

    if(!books.length) return res.send({error:"No such book available!"});
    let details = [];
    for(let i=0;i<books.length;i++){
        details.push(`${books[i].book_name} : ${(await AuthorModel.findOne({author_id:books[i].author_id})
        .select({author_name:1,_id:0})).author_name}`);  
    }
    res.send({"The authors coresponding to the books are:":details});
}

  


module.exports.createBooksData = createBooksData
module.exports.getAuthorsName = getAuthorsName

