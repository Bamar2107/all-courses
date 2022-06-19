function showname(){
    const name= document.querySelector('#showName');
    const btn = document.querySelector('#btn');

    name.innerHTML="Loading......";
    setTimeout(() =>
    {
        name.innerHTML="Amarendra Babu";
    },3000);
    btn.addEventListener('click',showname );
}