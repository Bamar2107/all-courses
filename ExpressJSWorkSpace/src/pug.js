const express= require('express');
const path= require('path');
const port =8000;
const app = express();
const pugpath= path.join(__dirname,'/template');

//set view engine
app.set('view engine', 'pug');

//set the pug file path (default dirname was views, but we can change to any other name)
app.set('views', pugpath);

//sending some values to pug file & display it on the browser
app.get('/', (req,res) =>{
    res.render('dynamic', {                         //here dynamic is the file name of pug file i.e, dynamic.pug which is inside template folder
        name:"Amarendra",
        website:"www.techieamar.com",
        skills: ['HTML','CSS','JS','NodeJS','ExpressJS','MongoDB']
    });
});

app.listen(port,() =>{
    console.log(`listening to the port number ${port}`);
})
