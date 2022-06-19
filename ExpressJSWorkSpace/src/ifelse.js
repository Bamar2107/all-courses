const express= require('express');
const path = require('path');
const app = express();
const port= 8000;
const filepath = path.join(__dirname,'/template');

//set view engine
app.set('view engine', 'pug');

//set changed view folder to templatefolder
app.set('views', filepath);

app.get('/', (req,res) =>{
    var person = {
        name:"Amar",
        profession:"Software Developer",
        city:"Banglore"
    };

    //if we do not set the key value pair on render function then else statement will run & user get no result
    res.render('ifelse',{
        data:person
    });
});

app.listen(port, ()=>{
    console.log(`listening to port number`);
})