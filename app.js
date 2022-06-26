const results = document.getElementById("results");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");

let count = 0;

addBtn.addEventListener("click", () => {
    count = count + 1;
    results.innerText = count;
})

resetBtn.addEventListener("click", () => {
    count = 0;
    results.innerText = 0;
})