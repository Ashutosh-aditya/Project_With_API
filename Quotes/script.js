const api="https://api.quotable.io/quotes/random";
const getQuote=document.getElementById("getQuote");
const quote=document.getElementById("quote");
const author=document.getElementById("author");
getQuote.addEventListener("click",()=>{
    fetch(`${api}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        quote.innerHTML=`${data[0].content}`;
        author.innerHTML=`~${data[0].author}`;
    })
})