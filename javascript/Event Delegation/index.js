document.querySelector('#category')
.addEventListener('click', (e)=>{
     //console.log(e.target)   //this gives which target element is clicked
     console.log(e.target.id);
     //console.log(e.target.tagName)
     // we should not redirect the user directly so we need to validate first if the tag name is correct or not
    if(e.target.tagName == 'LI')
     {
     window.location.href ='/'+ e.target.id;
}
});


//to print the name in uppercase automatically
document.querySelector('#form').addEventListener('keyup' ,(e) =>{
    if(e.target.dataset.uppercase != undefined)
    {
        e.target.value = e.target.value.toUpperCase();
    }
})