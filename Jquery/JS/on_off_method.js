$(document).ready(function(){
  
  //on method on sinle event
   // $('.box').on('click', function(){
     //  $(this).css('background','orange')
   //});

   //$('.box').on('mouseover mouseout', function(){
     //$(this).toggleClass('boxbg');
   //});

 //on method on multiple event
 $('.box').on({
     "click" : function(){
          $(this).css('background','orange')
     },
     "mouseover":function(){
        $(this).css('background','lightblue')
     },
     "mouseout":function(){
         $(this).css('background','lime')
     }
    });

$('.remove').click(function(){
    $('.box').off('mouseover mouseout')
})
});