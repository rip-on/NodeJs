function add(a,b){
    return a+b;
}
// console.log(add(2,4));

function sub(a,b){
    return a-b;
}
// module.exports = "Ripon";
module.exports = {add,sub};


//or
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b; //arrow function
