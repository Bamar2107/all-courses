$(document).ready(function(){
   $(window).scroll(function(){
       $('.result').html("");
       $('.result').append("Top :"+$(window).scrollTop());
       $('.result').append("<br> Left"+ $(window).scrollLeft());
   });
   //for scrollTop button
   $('.scrolltop').click(function(){
       $(window).scrollTop(500);
   });

   //for scollleft button
   $('.scrollleft').click(function(){
       $(window).scrollLeft(100);
   })
});