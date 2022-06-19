$(document).ready(function(){
    $('.before').click(function(){
        $('.box').before('<h2>Hi I am h2 tag from Before method</h2>');
        $('ol').before('<li>New List Item</li>');
        
    });

    $('.after').click(function(){
        $('.box').after('<h2>Hi I am h2 tag from after method</h2>');
        $('ol').after('<li>New List Item</li>');
    });
})