const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let destinationImage = document.querySelector("#destinationImage")

fetch(`./data/${id}.json`)
.then(response => response.json())
.then(data => {document.querySelector('body').innerHTML +=` 
<figure>
<img src="./img/${data.image}" alt="">
<span><i id="heart" class="fa-regular fa-heart"></i> Favorit</span>
</figure>
<section>
<h2>${data.destination}</h2>
<h1>${data.title}</h1>
<p class="title">${data.subtitle}</p>
<p class="desc">${data.text}</p>
<h3>Faciliteter</h3>
<ul>
    <li>${data.facilities[0]}</li>
    <li>${data.facilities[1]}</li>
    <li>${data.facilities[2]}</li>
    <li>${data.facilities[3]}</li>
</ul>
</section>`
console.log(data);
})