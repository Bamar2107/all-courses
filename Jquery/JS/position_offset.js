$(document).ready(function(){
    $('.position').click(function(){
        var pos = $('.box h2').position();

        console.log("Position of the Paragraph from top :" +pos.top+" and from left :"+pos.left);
    });

    $('.offset').click(function(){
        var pos = $('.box h2').offset();
        //var pos = $('.box h2').offset({
          //  top:0,
            //left:0
        //});

        console.log("Position(offset) of the Paragraph from top :" +pos.top+" and from left :"+pos.left);
    })





})