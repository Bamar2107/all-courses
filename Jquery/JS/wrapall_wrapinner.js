$(document).ready(function(){
    $('.wrapall').click(function(){
        $('p').wrapAll('<div class="box"></div>')
    });

    $('.wrapinner').click(function(){
        $('h1').wrapInner('<span class="wrapinner"></span>');
    });


});