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
function coloring(){
    red = Math.floor(Math.random()+255+1)
    green = Math.floor(Math.random()+255+1)
    blue = Math.floor(Math.random()+255+1)
}
render();