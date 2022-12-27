const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) return res.send({ status: false, msg: "token must be present" });

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise