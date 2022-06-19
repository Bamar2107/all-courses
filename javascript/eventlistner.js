
function clickedbuttoncount(){
    let tableof= document.getElementById("mynum").value;
    document.getElementById("Clickme").addEventListener("Click", ()=>
    {
        for(var i=1;i<=10;i++)
        {
        document.getElementById("showresult").innerHTML= `${tableof} * ${i} = ${tableof * i}`;
        }
});
}
clickedbuttoncount();