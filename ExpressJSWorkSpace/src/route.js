const express = require('express');
const app = express();
const port = 7000;
const courses = require('./courses');

app.use("/courses", courses)

app.get("/", (req,res) =>{
   res.send("<h2>Welcome to the Routing Concept in Express, to know type courses on the addressbar after port number</h2>");
});

app.listen(port,() =>{
    console.log(`listening to the port number ${port}`);
});