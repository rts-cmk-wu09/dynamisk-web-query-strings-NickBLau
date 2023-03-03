const destinationlist = document.querySelector('.destinationlist')

fetch('./data/destinations.json')
    .then((response) => response.json())
    .then(data => {
        // console.log(data.destinations[0]);
        data.destinations.forEach(destination => {
            destinationlist.innerHTML += `
            <figure id="${destination.id}">
            <img src="./img/${destination.image}" alt="">
            <div class="fav">
            <span><i class="fa-regular fa-heart"></i></span>
            <a href="/destination.html?id=${destination.id}">More</a>
            </div>
            </figure>
            `;
        });
    });
