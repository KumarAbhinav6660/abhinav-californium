const express = require('express');
const router = express.Router();


router.get('/students2', function (req, res){
    let students = ['Mani', 'Akhilesh', 'Akash']
    res.send(students)
})

router.post('/players', function(req, res){
    const array = [32, "Abhinav", true]
    console.log(req.body)
    array.push(req.body.element)
    res.send(array)
})





module.exports = router;