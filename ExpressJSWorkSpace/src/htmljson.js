const express = require('express');
const app = express();
const port = 8000;

app.get("/",(req,res) =>{
    res.write("<h1>Welcome to Home Page</h1>");
    res.write("<h1>Have a Good Day Amar</h1>");
    res.send();
});
app.get("/about",(req,res) =>{
    res.send("Welcome to About us Page");
});
app.get("/contact",(req,res) =>{
    res.json(                       //res.send() will also work here
        {id:101,
        user:"Amar",
        city: "Bhawanipatna",
        pin: 766001,
         married: false,
        death:null}
    );
});

//res.send() & res.json() are identical when an object or array is passed,
//but res.json() convert non-objects, such as undefined,null which are not a valid json. 
app.get("/temp",(req,res) =>{
    res.send("Welcome to temp Page");
});

app.listen(port, ()=>{
    console.log("Listening to the port numbrt "+port);
})