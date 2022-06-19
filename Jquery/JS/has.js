$(document).ready(function(){
    $('.checkbold').click(function(){
        $('p').has('b').css('background', 'gold');
    });



    $('.checkspan').click(function(){
        $('p').has('span').css('background', 'lightgreen');
        $('ul li').has('span').slideToggle(2000);
    });

    $('.is').click(function(){
        if($('p').parent().is('div')){
            $('div').css('background','yellowgreen');
        }
    })
});