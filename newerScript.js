fetch("data/destinations.json").then((response) => 
{ console.log("resolved", response);
return response.json(); }).then(data => 
    { const list = document.querySelector("#destination-list")
data.destinations.forEach(destination => { const item = document.createElement("li")
list.append(item)
item.innerHTML = `<a href="destionation.html?id=${destination.id}">
<img src="img/${destination.image}"><p>${destination.title}</p></a>`})


});