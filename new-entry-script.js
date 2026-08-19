document.querySelector("#entry-button").addEventListener("click", addEntry);
document.querySelectorAll(".mood").forEach((element) => {element.addEventListener("click", () => addMood(element))});
document.querySelector("#discard-button").addEventListener("click", discardEntry)
let entries;
const cardBox = document.querySelector(".card-box");
let mood = "";

if (JSON.parse(localStorage.getItem("entries"))) {
entries = JSON.parse(localStorage.getItem("entries"));
} 
else {
    entries = [];
};

function addEntry() {
    let titleName = document.getElementById("title").value;
    let entryBody = document.getElementById("entry-body").value;
    let mood = document.getElementById("chosen-mood");

    let entry = {
        title: titleName,
        body: entryBody,
        mood: mood.textContent
    };

    entries.push(entry);

    localStorage.setItem("entries", JSON.stringify(entries));
    document.getElementById("title").value = "";
    document.getElementById("entry-body").value= "";
    mood.textContent = "";
    mood.style.display = "none";
    mood.classList=""
    }


function addMood(m) {
    let mood = m.textContent;
    let chosenMood = document.querySelector("#chosen-mood");
    if (chosenMood.classList) {
        chosenMood.classList=""
    }
    chosenMood.classList.add(mood.toLowerCase());
    chosenMood.classList.add("mood");
    chosenMood.textContent = mood;
    chosenMood.style.display = "block"
}

function discardEntry() {
    let mood = document.getElementById("chosen-mood");
    document.getElementById("title").value = "";
    document.getElementById("entry-body").value= "";
    mood.textContent = "";
    mood.style.display = "none";
    mood.classList=""
}