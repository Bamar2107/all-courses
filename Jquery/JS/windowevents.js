$(document).ready(function(){
    $('.box').scroll(function(){
        console.log(`You are scrolling the div`);
    })
    $(window).resize(function(){
        console.log(`You are resizeing the window`);
    })
})