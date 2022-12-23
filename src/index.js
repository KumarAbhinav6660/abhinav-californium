const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://KumarAbhinav:50fqiyRJRjrndcU1@cluster0.nlowfdq.mongodb.net/Abhinav6660-DB", {
    useNewUrlParser: true}, mongoose.set("strictQuery",true)
    )
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use (
    function (req, res, next) {
    console.log(moment().format('DD-mm-yyyy hh:mm:ss'), req.socket.remoteAddress, req.path)
    next()
    }
)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
