$(document).ready(function(){
   $('.outer').click(function(){
       // $(this).children().fadeToggle(2000);
       $(this).find('.child').slideToggle(2000);
    });
});