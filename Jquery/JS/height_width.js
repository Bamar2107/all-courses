$(document).ready(function(){
   $('.width').click(function(){
       var width= $('.box').width();
       console.log("Width is :"+width);
       var innerwidth= $('.box').innerWidth();
       console.log("Inner Width :"+innerwidth);
       var outerWidth = $('.box').outerWidth();
       console.log("Outer Width :"+outerWidth);
       var outerWidthtrue = $('.box').outerWidth(true);
       console.log("Outer Width (true) :"+outerWidthtrue); 
   });

   $('.height').click(function(){
    var height= $('.box').height();
    console.log("Height is :"+height);
    var innerheight= $('.box').innerHeight();
    console.log("Inner Height :"+innerheight);
    var outerheight = $('.box').outerHeight();
    console.log("Outer Height :"+outerheight);
    var outerHeighttrue = $('.box').outerHeight(true);
    console.log("Outer Height (true) :"+outerHeighttrue); 
});

});