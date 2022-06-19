document.querySelector('#a')
.addEventListener('click',() =>{
    console.log('Grandparent Clicked');
},true);

document.querySelector('#b')
.addEventListener('click',(e) =>{
    console.log('Parent Clicked');
    
},true);


document.querySelector('#c')
.addEventListener('click',(e) =>{
    console.log('Child Clicked');
    e.stopPropagation();
},false);