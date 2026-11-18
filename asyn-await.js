// let result = fetch("https://www.typicode.com");

// console.log(result);
let a = 2;
let b = 4;
let sum = a + b;


// async function getData() {
//     let result = await fetch("https://www.jsonplaceholder.typicode.com/posts");
    
//     console.log(await result.json());
// }

// getData();

//orr
fetch("https://dummyjson.com")
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})

console.log(sum);