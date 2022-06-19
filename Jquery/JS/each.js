$(document).ready(function(){
    $('.each').click(function(){
        $('li').each(function(){
            $(this).slideToggle(3000);
        });
    });
});