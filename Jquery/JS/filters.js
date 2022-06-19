$(document).ready(function(){
    // $('.first').click(function(){
    //     $('.second p').first().slideToggle(2000);
    // });

    $('.second').click(function(){
        $('.first p').last().slideToggle(2000);
    })

    $('ul li').click(function(){
        $('ul li').eq(2).slideToggle(2000);
    });

    // $('.first').click(function(){
    //     $('p').filter('.para').slideToggle(2000);
    // });

    $('.first').click(function(){
        $('.second p').not('.para').slideToggle(2000);
    });
   
     $('.slice').click(function(){
         $('ul li').slice(1).css('background','gold');
     })
});