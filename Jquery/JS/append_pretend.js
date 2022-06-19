$(document).ready(function(){
    $('.append').click(function(){
        $('.box').append('<h2>Hi I am h2 tag from Append method</h2>');
        $('ol').append('<li>New List Item</li>');
        
    });

    $('.prepend').click(function(){
        $('.box').prepend('<h2>Hi I am h2 tag pretend method</h2>');
        $('ol').prepend('<li>New List Item</li>');
    });
})