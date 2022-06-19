const express = require('express');
const app = express();
const port =8000;
const path = require("path");
const templatefile = path.join(__dirname,"/template");


//to set the view engine or template engine
app.set('view engine', 'hbs');

//we can change the views folder name which is the default directory name for the template engine
app.set('views', templatefile);


//template engine route
app.get("",(req,res) =>{
    res.render('index.hbs',{
        fullname:"Ashok"
    });
});

//here order is most important if we place our usual get method before render the template engine then it will show home page.
app.get("/", (req,res) =>{
    res.send("Welcome to the Home page");
})

app.listen(port,()=>{
    console.log(`listening to the port number ${port}`)
})