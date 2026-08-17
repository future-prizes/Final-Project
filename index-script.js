const entries = JSON.parse(localStorage.getItem("entries"));
const top5 = entries.slice(0,5);
const cardBox = document.querySelector(".card-box");


top5.forEach((entry) => {
let div = document.createElement("div");
let h = document.createElement("h4");
let p = document.createElement("p");
h.textContent = entry.title;
p.textContent = entry.body
div.appendChild(h);
div.appendChild(p);
cardBox.appendChild(div)


})


div.classList.add("card")