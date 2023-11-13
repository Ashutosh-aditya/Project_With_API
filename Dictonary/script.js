const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("mainContainer");
const sound=document.getElementById("sound");
const btn=document.getElementById("search-btn");
let lic;

btn.addEventListener("click",()=>{
    let inpWord=document.getElementById("inp-word").value;
    // console.log(inpWord);
    fetch(`${url}${inpWord}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML=`
        <div class="result" id="result">
            <h2 class="sample_word" >${inpWord}</h2>
            <button id="btn-icon" >
            <i class="fa-solid fa-volume-high" id="Sicon" onclick="playSound()"></i>
            <i class="fa-regular fa-copyright" id="Sicon2" onclick="getLicence()"></i></button>
            
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <div class="word_meaning">
            <p>${data[0].meanings[0].definitions[0].definition}</p>
        </div>
        <div class="word-example1">
        <p>${data[0].meanings[0].definitions[1].definition || ""}</p><br>
        </div>`;
        sound.setAttribute("src",`${data[0].phonetics[0].audio}`)
        // console.log(sound);
        lic = `${data[0].phonetics[0].license.url}`;
    })
    .catch(()=>{
        result.innerHTML=`<h2>Word not found</h2>`
    })
});


function playSound(){
    sound.play();
}

function getLicence() {
    if (lic) {
        window.open(lic, "_blank");
    } else {
        console.log(lic);
        console.log("License URL is not available yet.");
    }
}