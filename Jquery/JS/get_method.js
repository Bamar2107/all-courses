$(document).ready(function(){
    //get whole HTML code
    const getHtml= $('.box').html();
    console.log(getHtml);

    //get html code from paragarph
    const getvalue = $('.box p').html();
    console.log(getvalue)
    
    //get only text inside the div element
    const paraText = $('.box').text();
    console.log(paraText);

    //get the id or class name of the perticular element
    const getId = $('.box').attr('id');
    console.log(getId)
})