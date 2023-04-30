const counter = document.querySelector("#value");
let counterValue = 0;

const btnPlus = document.querySelector('[data-action="increment"]');
btnPlus.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

const btnMinus = document.querySelector('[data-action="decrement"]');
btnMinus.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
