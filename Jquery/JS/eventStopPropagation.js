$(document).ready(function(){
    $('.box').click(function(){
        alert("Div element was clicked")
    });

    $('h2').click(function(){
        alert("H2 element was clicked")
    });

    $('p').click(function(event){
        event.stopPropagation();
        alert("Paragraph element was clicked :" +event.isPropagationStopped())
    });

    $('button').click(function(){
        alert("Button element was clicked")
    });
})