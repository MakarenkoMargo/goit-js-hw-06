function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const div = document.querySelector("#boxes");
div.style.display = "flex";

let boxSize = 30;

btnCreate.addEventListener("click", onCreateBoxes);
btnDestroy.addEventListener("click", onDestroyBoxes);

function onCreateBoxes() {
  createBoxes(Number(input.value));
}

function createBoxes(amount) {
  let elements = [];
  for (let i = 1; i <= amount; i += 1) {
    let newBox = onDivCreate(boxSize);
    elements.push(newBox);
    boxSize += 10;
  }
  div.append(...elements);
}
function onDivCreate(size) {
  const divElem = document.createElement("div");
  divElem.style.width = `${size}px`;
  divElem.style.height = `${size}px`;
  divElem.style.backgroundColor = getRandomHexColor();
  return divElem;
}
function onDestroyBoxes() {
  div.innerHTML = "";
  boxSize = 30;
}
