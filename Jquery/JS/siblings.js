$(document).ready(function(){
   $('.child2').click(function(){
   
   //target all siblings
   // $(this).siblings().fadeToggle(2000);

   //target perticular siblings
   // $(this).siblings('.div4').fadeToggle(2000);
    
   //target next sibling
   // $(this).next().fadeToggle(2000);
    
    //target previous sibling
   //$(this).prev().fadeToggle(2000);
  
     //target all siblings afterwards
  // $(this).nextAll().fadeToggle(2000);
  


  $(this).nextUntil('.child5').fadeToggle(2000);
  
  
  })
});