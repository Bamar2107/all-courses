const express = require('express');
const app = express();
const port = 8000;


app.get("", (req,res) =>{
    res.send("<h2>Welcome to the URL building concepts in Express, to know better type your city name on the url bar after the port number like : 8000/city and you will get a unique id for your city");
})

//to set the variable on the url we need to write "/:city" like this. We can set multiple variable on the same url
app.get("/:city", (req,res) =>{
    res.send(`your city name is ${req.params.city} and your city id is ${(Math.floor(Math.random()*1000))}`);
})

//we can set validations on our variable using regular expression
app.get("/message/:phone([0-9]{10})", (req,res) =>{
    res.send(`Message to :${req.params.phone}`);
})

//if client search for another url apart from which was mentioned above then he will redirect to the error page 
app.get("*", (req,res)=>{
       res.send("404: Page not Founr")
})


app.listen(port, () =>{
    console.log(`Listening to the port number ${port}`);
})