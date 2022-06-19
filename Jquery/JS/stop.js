$(document).ready(function(){
    $('.animate').click(function(){
        $('.box').animate({
            left: '500px',
            borderWidth:'10px',
            fontSize:'20px'
            
        }, 4000);
    });
    $('.stop').click(function(){
        $('.box').stop(true,true)
    });

});