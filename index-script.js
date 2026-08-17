const entries = JSON.parse(localStorage.getItem("entries"));
const top5 = entries.slice(0,5);
const cardBox = document.querySelector(".card-box");


top5.forEach((entry, index) => {
let div = document.createElement("div");
let h = document.createElement("h4");
let p = document.createElement("p");
h.textContent = entry.title;
p.textContent = entry.body
div.appendChild(h);
div.appendChild(p);
div.classList.add("card");
switch (index) {
    case 0: 
    div.classList.add("first")
    break;
    case 1:
    div.classList.add("second")
    break;
    case 2:
    div.classList.add("third")
    break;
    case 3: 
    div.classList.add("fourth")
    break
    case 4:
    div.classList.add("last")
    break
}

cardBox.appendChild(div);



})


