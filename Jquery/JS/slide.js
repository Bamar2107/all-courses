$(document).ready(function(){
    $('.slideup').click(function(){
        $('.box').slideUp(2000);
    });

    $('.slidedown').click(function(){
        $('.box').slideDown(2000);
    });

    $('.slidetoggle').click(function(){
        $('.box').slideToggle(2000);
    });
})