const express= require('express');
const app = express();
const port = 8000;
const path = require('path');
const filepath = path.join(__dirname,'./template/component');
const bodyparser= require('body-parser');

//set view engine
app.set('view engine', 'pug');
//set view engine folder path
app.set('views', filepath);

//parsing json data
app.use(bodyparser.json());

// url encoded data parsing
app.use(bodyparser.urlencoded({ extended:true}));

app.get("/", (req,res) =>{
    res.send(`Welcome to Home Page`);
})

//registration page routing
app.get("/registration", (req,res) =>{
    res.render('registration');
})

//formhandler page get method routing


// app.get("/handleForm", (req,res) =>{
//     const temp = JSON.parse(JSON.stringify(req.query));
//     res.render('handleForm',{
//          "data" :temp

//          //this is used to read the data using query string

//          //{
//         //        "name" : req.query.username,
//         //        "email" : req.query.email,
//         //        "password" : req.query.userpass,
//         //        "gender" : req.query.gender,
//         //        "city" : req.query.city,
//         // }
//     });
// })

//handleForm page post method routing
app.post('/handleForm', (req,res) =>{
    res.render('handleForm', {
         data: req.body
    })
})

app.listen(port, () =>{
    console.log(`Listening to the port number ${port}`);
})