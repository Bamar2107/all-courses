$(document).ready(function(){
    $('.wrap').click(function(){
        $('.box p').wrap('<div class="wrapping"></div>')
    });

    $('.unwrap').click(function(){
        $('.box p').unwrap();
    });


});