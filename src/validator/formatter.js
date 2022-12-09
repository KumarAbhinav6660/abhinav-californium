function trimString(string){
    const resultString = string.trim()
    console.log("String with no whitespaces on both sides : "+resultString);
}

function lowerCase(string){
    console.log("String with lowerCase : "+string.toLowerCase());
}

function upperCase(string){
    console.log("String with upperCase : "+string.toUpperCase());
}

module.exports.trim = trimString
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase