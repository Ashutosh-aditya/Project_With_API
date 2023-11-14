const btn = document.getElementById("btn");
let name1 = document.getElementById("country");
const info = document.getElementById("info");

// Function to handle the search logic
const initiateSearch = () => {
    let cname = name1.value;
    let api = `https://restcountries.com/v3.1/name/${cname}?fullText=true`;

    fetch(`${api}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const cur = Object.keys(data[0].currencies)[0];
            info.innerHTML = `<table border=1>
                <tr>
                    <th colspan="2" style="text-align:center;">${data[0].name.common}</th>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:center;">
                    <img src="${data[0].flags.png}" style="margin: auto;padding-top:1em;padding-bottom:1em;"></td>
                </tr>
                <tr>
                    <td>Capital </td><td> ${data[0].capital[0]}<br></td>
                </tr>
                <tr>
                    <td>Currencies </td><td> ${cur}<br></td>
                </tr>
                <tr>
                    <td>Currency Name </td><td>${data[0].currencies[cur].name}<br></td>
                </tr>
                <tr>
                    <td>Currency Symbol</td><td style="text-align:center;">${data[0].currencies[cur].symbol}<br></td>
                </tr>
                <tr>
                    <td>Languages </td><td> ${Object.values(data[0].languages).toString().split(',').join(', ')}<br></td>
                </tr>
                <tr>
                    <td>Population </td><td> ${(data[0].population)}<br></td>
                </tr>
            </table>`
        })
        .catch(()=>{
            info.innerHTML =`<h2>Error no Country found with the given name</h2>`;
        });
};

// Event listener for the "Enter" key press
name1.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        initiateSearch();
    }
});

// Event listener for the button click
btn.addEventListener("click", () => {
    initiateSearch();
});
