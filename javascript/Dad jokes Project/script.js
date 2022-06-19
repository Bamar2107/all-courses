const jokes = document.getElementById("jokes");
        const jokesbtn = document.getElementById("jokebtn");

        const generateJokes = async() =>{
        const setHeader = {
            header : {
                Accept : "application/json"
            }
        }
        try{
            const res = await fetch('https://icanhazdadjoke.com', setHeader);
               const data = await res.json();
               jokes.innerHTML = data.joke;
        }catch(error){
                        body.innerHTML= `Error is ${error}`;
        }
              
}

        jokesbtn.addEventListener('click', generateJokes);
        generateJokes();