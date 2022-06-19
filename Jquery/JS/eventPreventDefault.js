$(document).ready(function(){
    $('.youlink').click(function(event){
        event.preventDefault();
    
    var a = event.isDefaultPrevented();
    $('.result').html("Prevent Default is apply on the link : "+a); 
    })
})