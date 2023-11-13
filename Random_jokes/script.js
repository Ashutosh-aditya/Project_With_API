const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist,explicit&type=single";
const jokePara=document.getElementById("joke-paragraph");
const jokeBtn=document.getElementById("getJokeBtn");

jokeBtn.addEventListener("click",()=>{
    fetch(`${url}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        jokePara.innerHTML=`${data.joke}`;
    })
    .catch(()=>{
        jokePara.innerHTML=`<h2>Error</h2>`;
    })
})