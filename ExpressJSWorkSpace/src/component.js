const express= require('express');
const app = express();
const port =8000;
const path = require('path');
const filepath = path.join(__dirname,'/template/component');

//set view engine
app.set('view engine', 'pug');

app.set('views', filepath);

app.get("/",(req,res) =>{
    res.render('index');
});

app.listen(port,() =>{
    console.log(`Listening to the port ${port}`);
});