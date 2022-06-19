/**first node js program to connect with the local database, in my case my local db is mongodb */

const mongoose= require("mongoose");


/**connect to the local database ehich is mongo db & estlablish a connection to babutechnical database 
 * if babutechnical is not present then it will create a new database
 */
mongoose.connect("mongodb://localhost:27017/babutechnical").then( ()=>
console.log("Connect Succefull.......")).catch( (err) => console.log(err));