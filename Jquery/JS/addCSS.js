$(document).ready(function(){
   $('#addcss').click(function(){
       $('.box').css({'background-color':'cyan','color':'blue','border':'5px solid red'});
   });

   $('#removecss').click(function(){
    $('.box').css({'background-color':'','color':'','border':''});
      });

});