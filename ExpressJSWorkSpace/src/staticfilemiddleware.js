const express= require('express');
const app = express();
const port = 8000;
const path = require('path');
const filepath = path.join(__dirname,'/template/component');

//use static file middleware
app.use(express.static('./template/files'));

//set view engine
app.set('view engine', 'pug');
app.set('views', filepath);

app.get("/",(req,res) =>{
    res.send("Welcome to Home Page");
});

app.get("/files", (req,res) =>{
    res.render('staticfile.pug');
});

app.listen(port,()=>{
    console.log(`Listening to port number ${port}`);
})