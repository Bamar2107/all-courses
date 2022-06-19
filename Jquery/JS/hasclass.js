$(document).ready(function(){
    $('.hasclass').click(function(){
    var hasClassCheck = $('#box h2').hasClass('test');
    if(hasClassCheck == true)
    {
        $('.result').html('<h2 style="color:green;">Yes I am available hasClass for h2</h2>')
    }else{
        $('.result').html('<h2 style="color:red;">hasClass is Not available for h2</h2>')
    }
    })
})