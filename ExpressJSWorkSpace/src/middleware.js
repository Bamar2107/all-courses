const express = require('express');
const app = express();
const port =7000;


app.use('/id', (req,res,next) =>{
    res.send(`Your unique id is: ${Math.floor(Math.random()*1000)}`);
    next();
});

// app.get('/id', (req,res) =>{
//     res.send("id");
// });

app.listen(port,()=>{
    console.log("listening");
});