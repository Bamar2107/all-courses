function calculateTable(){
    let tableOf= document.getElementById("mynum").value;
    var result="";
    for(var i=0;i<=10;i++)
    {
        result = `${tableOf} * ${i} = ${tableOf*i}`;
     
    }
    document.getElementById("showtable").innerHTML= result;
}