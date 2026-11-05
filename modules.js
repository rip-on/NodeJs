const math = require('./math') //add is the name of the module
console.log(math.add(6,6));
console.log(math.sub(23,3));

//or 
//desturcturing
const { add, sub} = require("./math");

console.log(add(5,4));
console.log(sub(330,333));






