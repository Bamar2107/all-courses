async function test(){
   //const stud= await fetch("students.json");
   //const result = await stud.json();

   //return result;

   return (await fetch("jsondemo.txt")).json();

}

test().then( (res) =>{
          console.log(res);
}).catch( (error) =>{
    console.log("Data not fetch")
});