const matrix = document.querySelector(".matrix");
function render(){
    matrix.innerHTML = ""
    for (let i = 0; i<25; i++){
    const field = document.createElement("div");
    // eseményfigyelő
    field.classList.add("field");
    matrix.appendChild(field)
    }

}
render();