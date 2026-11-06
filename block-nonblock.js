const fs = require("fs");

console.log("1");

// //Blocking (Sync)
// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// console.log("2");

//Non-blocking
fs.readFile("contacts.txt","utf-8",(err,result)=>{
    console.log(result);
    
});

console.log("2");
console.log("3");
console.log("4");
console.log("5");
