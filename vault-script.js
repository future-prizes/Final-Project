const entries = JSON.parse(localStorage.getItem("entries"));
const cardBox = document.querySelector(".card-box");


entries.forEach((entry, index) => {
let div = document.createElement("div");
let h = document.createElement("h4");
let p = document.createElement("p");
h.textContent = entry.title;
p.textContent = entry.body
div.appendChild(h);
div.appendChild(p);
div.classList.add("entry-card");
cardBox.appendChild(div);



})


