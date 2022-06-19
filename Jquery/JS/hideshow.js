$(document).ready(function(){
    $('.hide').click(function(){
        $('.box').hide(3000, function(){
            console.log("Hi I am Hide");
        });
    });

    $('.show').click(function(){
        $('.box').show(2000, function(){
            console.log("Hi i am visible");
        });
    });

    $('.toggle').click(function(){
        $('.box').toggle(2000, function(){
            console.log("I am Toggle");
        });
    });
})