const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Req Rec\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
    switch(req.url){
        // '/' means home page
        case '/': res.end("Home Page");
        break;

        case '/about': res.end("I am Aman");
        break;

        default: res.end("404 not found");

    }
});
    console.log("New Request Received");
    res.end('Hello from server');
});

myServer.listen(8000,()=>console.log("Server Started"));
