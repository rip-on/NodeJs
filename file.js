//File Handling

const fs = require("fs");

//sync
fs.writeFileSync("./myText.txt","Hi there!");

//aysc
fs.writeFile("./myText.txt","Hello world Async",(err) => {}); //just an extra callback function

const result = fs.readFileSync("./contacts.txt","utf-8");

console.log(result );


//or
fs.readFile("./contacts.txt","utf-8",(err, results)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
})

//what if we don't overwrite and append something( string of course )

const time = fs.appendFileSync("./contacts.txt",new Date().getDate().toLocaleString());

console.log(time);

const appending = fs.appendFileSync("./contacts.txt",`Hey There!\n`);

console.log(appending);

//copy a file
fs.cpSync("./contacts.txt","./copy.txt"); //new file name is copy

fs.unlinkSync("./copy.txt");
