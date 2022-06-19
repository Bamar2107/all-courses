$(document).ready(function(){
    $('.box').on("mouseover mouseout mousedown", function(events){
        $('h2').html("Event Triggered :"+events.type+ " :"+ events.which);
    })



    $('.inputclass').on("keydown", function(events){
        $('h2').html("Event Triggered :"+events.type+ " :"+ events.which);
    })
})