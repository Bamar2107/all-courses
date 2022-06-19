function shownumber(){
    const num= document.querySelector('#shownum');
    const btn = document.querySelector('#btn');
    const btn1 = document.querySelector('#btn1')
    
    
    let i=0;
    let timeRef;


    num.innerHTML="Loading......";
    timeRef = setInterval(() =>
    {
        num.innerHTML=`${i}`;
        i++;
    },1000);
  
    btn.addEventListener('click',shownumber );
    btn1.addEventListener('click', ()=>{
        clearInterval(timeRef);
    })
}