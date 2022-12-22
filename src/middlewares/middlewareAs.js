const middlewareAs = function ( req, res, next) {

    let timeStamps = new Date()
    let ip = req.ip

    console.log(timeStamps +" "+ ip +" "+ req.originalUrl);
    next()
} 

module.exports.middlewareAs = middlewareAs