const results = document.getElementById("results");
const addBtn = document.getElementById("add--btn");
const resetBtn = document.getElementById("reset--btn");
const saveBtn = document.getElementById("save--btn");
const savedResults = document.getElementById("saved__results");

let count = 0;

addBtn.addEventListener("click", () => {
    count++;
    results.innerText = count;
})

function save() {
    savedResults.style.display = "block";
    let countStr = count + " - ";
    savedResults.innerText += countStr;
}

saveBtn.addEventListener( "click", save );

// Resets the form
resetBtn.addEventListener( "click", () => {
    count = 0;
    countStr = '';
    savedResults.style.display = 'none';    
    results.innerText = 0;
})