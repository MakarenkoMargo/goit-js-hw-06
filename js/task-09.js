function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanTextColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColor);
function onChangeColor(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanTextColor.style.color = newColor;
}
