const board = document.querySelector(".board");

let userSize = 16;
const BOARDSIZE = 500;

function changeColor() {
    this.style.backgroundColor = "black";
}

function createPixel(size) {
    let total = size * size;

    for (let i = 0; i < total; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = `${BOARDSIZE / size - 1}px`;
        pixel.style.height = `${BOARDSIZE / size - 1}px`;
        pixel.classList.add("pixel");
        board.append(pixel);

        pixel.addEventListener("mouseover", changeColor);
    }
}

createPixel(userSize);

