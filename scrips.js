let userInput = prompt("Please, enter specific plate resolution.", 16);
let userColor = "black";
const container = document.querySelector(".grid_wrapper");

let width = 600 / userInput;
let height = 600 / userInput;

if (userInput <= 100) {
  setGrid(userInput, userColor);
} else {
  let errorMessage = document.createElement("div");
  errorMessage.innerText =
    "Wrong resolution, please, restart your page and use less than 100 pixels";
  container.appendChild(errorMessage);
}

const setColor = () => {
  userColor = document.querySelector(".color_input").value;
};

const clearGrid = () => {
  container.innerHTML = "";
  setGrid(userInput, userColor);
};

function setGrid(resolution) {
  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      let squareDiv = document.createElement("div");
      container.appendChild(squareDiv);

      squareDiv.style.width = `${width}px`;
      squareDiv.style.height = `${height}px`;
      squareDiv.style.border = "1px solid black";
      squareDiv.style.backgroundColor = "white";

      squareDiv.onmouseover = () => {
        squareDiv.style.backgroundColor = userColor;
      };
    }
  }
}
