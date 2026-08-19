const entries = JSON.parse(localStorage.getItem("entries"));
const cardBox = document.querySelector(".card-box");

if (entries) {
  entries.forEach((entry, index) => {
    let div = document.createElement("div");
    let h = document.createElement("h4");
    let p = document.createElement("p");
    let aside = document.createElement("aside");
    h.textContent = entry.title;
    p.textContent = entry.body;
    aside.textContent = entry.mood;
    div.appendChild(h);
    div.appendChild(p);
    div.appendChild(aside);
    div.classList.add("entry-card");
    cardBox.appendChild(div);
    aside.classList.add("mood");
    if (entry.mood){
    aside.classList.add((entry.mood).toLowerCase())
}
    
  });

  

} 
else {
    let div = document.createElement("div");
    let h = document.createElement("h4");
    let p = document.createElement("p");
    let a = document.createElement("a");
    h.textContent = "Your Memories await you";
    p.textContent = "Add a new memory here";
    a.textContent = "New Entry";
    a.href = "new-entry.html";
    div.classList.add("empty-card")
    div.appendChild(h);
    div.appendChild(p);
    div.appendChild(a);
    cardBox.appendChild(div);

}
