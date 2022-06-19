$(document).ready(function(){
    $('.empty').click(function(){
        $('.box h2').empty();
        
    });

    $('.remove').click(function(){
        $('.box').remove();
    });
})