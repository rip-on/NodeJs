const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res)=>{
    const myUrl = url.parse(req.url, true);
    const log = `${Date.now()}: ${req.url} received new request\n`
    fs.appendFile('log.txt' ,log,((err,data)=>{
        switch (myUrl.pathname) {
            case '/':
                res.end("homepage");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search.query;
                res.end("Here are your results for " + search);
                break;
        
            default:
                res.end("404 not found");
                break;
        }
    }))

})