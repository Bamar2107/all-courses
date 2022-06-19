$(document).ready(function(){
  $(document).mousemove(function(events){
       $('.box').text("X-axis Location :"+events.pageX+" Y-axis location :"+events.pageY);
       var x= events.pageX;
       var y= events.pageY;

       $('.result').offset({
           top:y,
           left:x
       });
  });
});