const matrix = document.querySelector(".matrix");
function render(){
    matrix.innerHTML = ""
    for (let i = 0; i<25; i++){
    const field = document.createElement("div");
    // eseményfigyelő
    field.addEventListener("click", coloring)
    field.classList.add("field");
    matrix.appendChild(field)
    }
}
function randomcolor(){
    return Math.floor(Math.random()*254+1)
}
function coloring(event){
    let red = randomcolor();
    let green = randomcolor();
    let blue = randomcolor();
    event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    event.target.innerHTML = `(${red},${green},${blue})`;
}

const button = document.querySelector("button")
button.addEventListener("click",() => {
    const fields = document.querySelectorAll(".field")
    fields.forEach(gomb => {
        gomb.style.backgroundColor = "";
        gomb.innerHTML = "";
    })
})
render();