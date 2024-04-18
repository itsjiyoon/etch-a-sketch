const board = document.querySelector(".board");

let userSize = 16;
const BOARDSIZE = 500;
const sizebtn = document.querySelector(".sizeButton");
const resetbtn = document.querySelector(".resetButton");


function createPixel(size) {
    let total = size * size;

    for (let i = 0; i < total; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = `${BOARDSIZE / size - 1}px`;
        pixel.style.height = `${BOARDSIZE / size - 1}px`;
        pixel.classList.add("pixel");
        board.append(pixel);

        pixel.addEventListener("mouseover", changeColor);
        resetbtn.addEventListener("click", e => pixel.style.backgroundColor = "white");
    }
}

createPixel(userSize);


function changeColor() {
    this.style.backgroundColor = "black";
}


function sizeChange() {
    userSize = prompt("Enter a number between 2 and 100");
}

