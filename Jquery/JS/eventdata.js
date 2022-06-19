$(document).ready(function(){
    $('p').each(function(i){
        $(this).on("click", {value:i}, function(event){
              alert(event.data.value);
        })
    })
})