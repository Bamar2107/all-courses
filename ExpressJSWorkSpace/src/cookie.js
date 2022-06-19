const express= require('express');
const app= express();
const port= 8000;
const cookieParser= require('cookie-parser');

// cookieparser setup
app.use(cookieParser());


app.get('',(req,res) =>{
    res.send("Welcome to index page")
})

//Cookie parser routing
app.get('/cookie_test', (req,res) =>{
    //create cookie & set a user5name using key value pair
    res.cookie("username", "Amarendra Babu");
    res.cookie("pass", "Amar@007");
    res.send("Cookie set");
})

//to access cookie from server side
app.get('/cookie_check', (req,res) =>{
    
    //to show value as json format
   // var cookieobj = JSON.stringify(req.cookies)
    //res.send("cookies Value :"+ cookieobj.username);

   res.send(`Cookie UserName: ${req.cookies.username}`)
   console.log(req.cookies);
})


//to clear cookies
app.get('/cookie_clear', (req,res) =>{
    res.clearCookie('username');
    res.send(`Cookie Value : ${req.cookies.username}`);
    console.log(req.cookies);
})

app.listen(port,() =>{
    console.log(`listening to port numbrt ${port}`);
})