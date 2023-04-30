const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");
const elements = ingredients.map((ingredient) => {
  const createElem = document.createElement("li");
  createElem.textContent = ingredient;
  createElem.classList.add("item");

  return createElem;
});

list.append(...elements);
