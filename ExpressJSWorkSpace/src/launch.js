const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const filepath = path.join(__dirname,"../FloatingDiv");


app.use(express.static(filepath));

app.listen(port,()=>{
    console.log('Listening to the port '+port);
})