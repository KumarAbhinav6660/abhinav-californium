function printDate(){
    const todaysDate = new Date()
    console.log("Date of today is : "+todaysDate);
}

function printMonth(){
    const todaysDate = new Date()
    const month = todaysDate.getMonth()
    console.log("Current month is : "+month);
}

function getBatchInfo(){
    console.log("Californium, W3D4, the topic for today is Nodejs module system");
}


module.exports.dot = printDate
module.exports.currMonth = printMonth
module.exports.info = getBatchInfo