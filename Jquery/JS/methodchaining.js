$(document).ready(function(){
    $('.animate').click(function(){
        $('.box').slideUp(3000).slideDown(3000).css('background','lightgreen').animate({
            borderWidth:'12px',
            fontSize:'20px',
            left:'300px'
        },2000);
    });
});