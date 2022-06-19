AOS.init();

let orgdata ="";
const quotes = document.getElementById('display_quotes');
const author = document.getElementById('display_author');
const tweet = document.getElementById('tweet');


const tweetNow = () =>{
    const tweetpost = `https://twitter.com/intent/tweet/?text=${orgdata[randomnum].text}`;
    window.open(tweetpost);
}

const getNewQuotes = () =>{
    let randomnum = Math.floor(Math.random()*1643);
    quotes.innerText = `${orgdata[randomnum].text}`;
    if(orgdata[randomnum].author==null){
          author.innerText= 'Unknown';
    }else{
    author.innerText = `${orgdata[randomnum].author}`;
    }
}


const getQuotes = async () =>{
    const api= "https://type.fit/api/quotes";
    try{
          let data = await fetch(api);
           orgdata = await data.json();
         
           getNewQuotes();
    }catch(err)
    {

    }

};

tweet.addEventListener('click', tweetNow);
getQuotes();