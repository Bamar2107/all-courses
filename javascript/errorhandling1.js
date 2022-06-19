try{
    let json ='{"name":"Amar","age":25}';
    let user= JSON.parse(json);
    console.log(user.name);
    console.log(user.age);
    if(!user.name){
        throw new Error("Name not found");
    }
}catch(error){
    console.log(error);
}finally{
    console.log("Finally");
}