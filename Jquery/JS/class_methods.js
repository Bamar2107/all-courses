$(document).ready(function(){
      $('#addbutton').click(function(){
          $('.box,h2').addClass('first second');
      });
     
      $('#removebutton').click(function(){
        $('.box, h2').removeClass('second');
    });
     
    $('#togglebutton').click(function(){
        $('.box').toggleClass('second');
    });

});