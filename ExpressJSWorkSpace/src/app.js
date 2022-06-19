const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("Hello from the Express")

});
app.get("/about", (req,res) =>{
    res.send("Hello from the About Us Page");
});

app.listen(8000,()=>{
    console.log("Listening to the port 8000");
});

//get = read
//post = create
//put = update
//del = delete

//the callback function has two parameter request(req) & response (res)
//the request object represents the HTTP request and properties for the request query string , parameter, body, HTTP header etc..


//similarly the response(res) object represents the HTTP response that Express app sends when recieve the HTTP request
