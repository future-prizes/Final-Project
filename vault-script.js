const entries = JSON.parse(localStorage.getItem("entries"));
const cardBox = document.querySelector(".card-box");

function showEntries(entry, index){
  let div = document.createElement("div");
    let h = document.createElement("h4");
    let p = document.createElement("p");
    let aside = document.createElement("aside");
    let button = document.createElement("button");
    button.textContent = "Cast aside this memory";
    h.textContent = entry.title;
    p.textContent = entry.body;
    aside.textContent = entry.mood;
    button.addEventListener("click", ()=> {deleteMemory(entry, index)});
    div.appendChild(h);
    div.appendChild(p);
    div.appendChild(aside);
    div.appendChild(button)
    div.classList.add("entry-card");
    cardBox.appendChild(div);
    aside.classList.add("mood");
    button.classList.add("deleteButton");
    if (entry.mood){
    aside.classList.add((entry.mood).toLowerCase())
    } 
}

function deleteMemory(entry, index){
  cardBox.innerHTML = "";
  entries.splice(index, 1);
  localStorage.setItem("entries", JSON.stringify(entries));
  entries.forEach((entry, index) => {
    showEntries(entry, index)
  })
  if (entries.length==0) {
    emptyVault()
  }
}

function emptyVault() {
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

if (entries && entries.length !== 0) {
  entries.forEach((entry, index) => {
    showEntries(entry, index)
  });
} 
else {
    emptyVault()
}

