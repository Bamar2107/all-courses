$(document).ready(function(){
    $('.fadein').click(function(){
        $('.box').fadeIn(2000);
    });

    $('.fadeout').click(function(){
        $('.box').fadeOut(2000);
    });

    $('.fadetoggle').click(function(){
        $('.box').fadeToggle(2000);
    });

    $('.fadeto').click(function(){
        $('.box').fadeTo(2000, 0.5);
    })
})