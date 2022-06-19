$(document).ready(function(){
   $("#sname,#semail,#sclass,#country").focus(function(){
       $(this).css('background-color','lightgreen');
   });

   $("#sname,#semail,#sclass,#country").blur(function(){
    $(this).css('background-color','');
   });

   $("#country").change(function(){
    var collectvalue= $(this).val();
    $('.test').html(collectvalue);
     });

     $("#sname,#semail").select(function(){
        $(this).css('background-color','yellow');
       });

    $('#sform').submit(function(){
        alert('Form Submitted Successfully');
    })

});


