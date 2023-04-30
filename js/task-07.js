const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  const newInputFontSize = event.currentTarget.value;
  spanText.style.fontSize = `${newInputFontSize}px`;
}
