const express = require('express');
const app = express();
const port = 8000;

app.get("/",(req,res) =>{
    res.send("Welcome to Home Page");
});
app.get("/about",(req,res) =>{
    res.send("Welcome to About us Page");
});
app.get("/contact",(req,res) =>{
    res.send("Welcome to Contact Us Page");
});
app.get("/temp",(req,res) =>{
    res.send("Welcome to temp Page");
});

app.listen(port, ()=>{
    console.log("Listening to the port numbrt "+port);
})