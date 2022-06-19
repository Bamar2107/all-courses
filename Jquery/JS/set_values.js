$(document).ready(function(){
    $('#setvalue').click(function(){
        $('.box h2').text('Hello I am Changed text by set method');
        $('.box p').text('Hi i am changed paragraph from set method')
        $('.box').css('background-color','cyan');
        //set attribute
        $('.box h2').attr('class','red'); 
    });

    //set values for form
    $('#sname').val('Amar');
    $('#city').val('Bhawanipatna');


});