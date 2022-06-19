const { application } = require('express');
const express = require('express');
const app = express();
const port = 8000;
const session = require('express-session');


//set the session
app.use(session({secret:'hnshuagx67uhshg5dg'}));

app.get('', (req,res) =>{
    res.send(`Welcome to Home page`)
});

//routing for session
app.get('/session_check', (req,res) =>{

    //check if user visit first time or not
    if(!req.session.counter){
        req.session.counter=1;
        res.send(`Welcome to the session, Your session count start : ${req.session.counter}`)
    }else{
        req.session.counter++;
        res.send(`Session Count: ${req.session.counter}`);
    }
})

app.listen(port, () =>{
    console.log(`Listening to thr port number ${port}`);
})
