const express = require('express');
const app = express();
const path = require("path");
const port = 8000;
const filepath = path.join(__dirname,"../public");
//console.log(filepath);

//use express middleware
app.use(express.static(filepath));

 app.get("/",(req,res) =>{
     res.send("Welcome to Home page");
 });
app.get("/contact",(req,res) =>{
    res.send("Welcome to Contact page");
});
app.get("/about",(req,res) =>{
    res.send("Welcome to About page");
});

app.listen(port,()=>{
    console.log("listeb to the port number "+port);
})