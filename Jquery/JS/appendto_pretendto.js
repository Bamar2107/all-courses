$(document).ready(function(){
    $('.appendto').click(function(){
        $('<h2>Hi I am h2 tag from Append To method</h2>').appendTo('.box');
        
    });

    $('.prependto').click(function(){
        $('<h2>Hi I am h2 tag from pretend To method</h2>').prependTo('.box');
    });
})