$(document).ready(function(){
    $('.replace').click(function(){
         // $('.box p').replaceWith('I am replaced Paragraph');
         
         $('<h3>I am h3 changed paragraph</h3>').replaceAll('.box p');
        });
});