const textInput = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    spanText.textContent = "Anonymous";
  } else spanText.textContent = event.currentTarget.value;
});
