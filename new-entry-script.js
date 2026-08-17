document.querySelector("#entry-button").addEventListener("click", addEntry);
let entries = [];
const cardBox = document.querySelector(".card-box");



function addEntry() {
    let titleName = document.getElementById("title").value;
    let entryBody = document.getElementById("entry-body").value;

    let entry = {
        title: titleName,
        body: entryBody
    }

    entries.push(entry)

    localStorage.setItem("entries", JSON.stringify(entries));
    document.getElementById("title").value = "";
    document.getElementById("entry-body").value= "";
}

