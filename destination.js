const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const idUrlParam = urlParams.get("id");

let image = document.querySelector("#image")

fetch(`data/${idUrlParam}.json`).then((Response) =>{
    return Response.json();

}).then(data =>{
    let card = document.querySelector("#wrapper")
    card.classList = "destinationCard"
    let figure = document.createElement("figure")
    card.append(figure)

    figure.innerHTML =`
    <img src="img/${data.image}">`
})