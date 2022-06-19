$(document).ready(function(){
   $('.child').click(function(){
       //$(this).parent().css('background','cyan');
       
      // $(this).parents().css('background','cyan');
       //we can set parents this way also
       //$(this).parents('.outer').css('background','cyan');
   
      // $(this).parentsUntil('.mainouter').css('background','cyan');
    
    //  $(this).offsetParent().css('background','cyan');

    $(this).closest('ul').css('background','cyan');

    })
});