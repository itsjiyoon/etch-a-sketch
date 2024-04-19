const board = document.querySelector(".board");

let userSize = 16;
const BOARDSIZE = 500;
const sizebtn = document.querySelector(".sizeButton");
const resetbtn = document.querySelector(".resetButton");
const blackbtn = document.querySelector(".black");
const randombtn = document.querySelector(".random");



function createPixel(size) {
    let total = size * size;

    for (let i = 0; i < total; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = `${BOARDSIZE / size - 1}px`;
        pixel.style.height = `${BOARDSIZE / size - 1}px`;
        pixel.classList.add("pixel");
        board.append(pixel);

        pixel.addEventListener("mouseover", e=> pixel.style.backgroundColor = changeColor("black"));
        resetbtn.addEventListener("click", e => pixel.style.backgroundColor = "white");
        blackbtn.addEventListener("click", e => pixel.addEventListener("mouseover", e => pixel.style.backgroundColor = changeColor("black")));
        randombtn.addEventListener("click", e => pixel.addEventListener("mouseover", e => pixel.style.backgroundColor = changeColor("random")));
        
    }
}

createPixel(userSize);


function changeColor(color) {
    if (color === "random") {
        const h = Math.floor(Math.random() * 360);
        
        return `hsl(${h},100%, 70%)`;
    }

    else {
        return "black";
    }
}

function removePixels() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}


sizebtn.addEventListener("click", function () {
    removePixels();

    userSize = prompt("Enter a number between 2 and 100");
    createPixel(userSize);
});
