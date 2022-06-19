const express = require('express');
const app= express();
const port=8000;
const path= require('path');
const pugpath= path.join(__dirname,'/template');


//set view engine
app.set('view engine', 'pug');
//set pug file path
app.set('views', pugpath);


app.get('', (req,res) =>{
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`listening to port number ${port}`)
});