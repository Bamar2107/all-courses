function table()
{
    var a= document.getElementById('num').value;
    for( var i=1 ;i<=10;i++){
        function close(x){
            setTimeout(() => {
                document.getElementById('showresult').innerHTML = `${a} * ${i} = ${a*i}`;
            }, x*1000);
        }
        close(i);
    }
}
table();