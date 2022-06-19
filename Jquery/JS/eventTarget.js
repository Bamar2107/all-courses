$(document).ready(function(){
   $('.box').on('click', function(event){
     $('.result').html("Element clicked is :"+event.target.nodeName)
   })
});