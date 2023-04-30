const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;
  const checkValue = Number(event.currentTarget.getAttribute("data-length"));
  if (inputLength === checkValue) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
