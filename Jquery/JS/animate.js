$(document).ready(function(){
    $('.animate').click(function(){
        $('.box').animate({
            left: '200px',
            borderWidth:'10px',
            fontSize:'30px'
        }, 2000);
    });
    $('.animate').click(function(){
        $('.box').animate({
            top: '200px',
            width:'300px',
            height:'100px'
        }, 2000);
    });
    $('.animate').click(function(){
        $('.box').animate({
            left: '400px',
        }, 2000);
    });

});