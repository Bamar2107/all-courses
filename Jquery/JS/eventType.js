$(document).ready(function(){
    $('.box').on("click dblclick mouseover mouseout", function(events){
        $('h2').html("Event Triggered :"+events.type);
    })
})