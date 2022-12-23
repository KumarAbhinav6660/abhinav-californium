const preUserValidation = function(req, res, next){
    let data = req.headers

    let x= Object.keys(data) 
    if(x.includes("isfreeuser")){
        next()
    }else{
        res.send({msg : "This detail is required."})
    }
    
}

module.exports.preUserValidation = preUserValidation