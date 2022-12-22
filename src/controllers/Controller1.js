const firstHandler = async function (req, res) {
    
    res.send({msg: "Response coming from my first API."})
}

const secondHandler = async function (req, res) {
    
    res.send({msg: "Response coming from my second API."})
}

const thirdHandler = async function (req, res) {
    
    res.send({msg: "Response coming from my third API."})
}

module.exports.firstHandler = firstHandler
module.exports.secondHandler = secondHandler
module.exports.thirdHandler = thirdHandler