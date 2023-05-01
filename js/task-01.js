const categoriesList = document.querySelector("#categories");
const categoriesEl = categoriesList.querySelectorAll(".item");
const numCategories = categoriesEl.length;
console.log("Number of categories:", numCategories);

categoriesEl.forEach((category) => {
  const categName = category.querySelector("h2").textContent;
  const categNumElem = category.lastElementChild.children.length;
  console.log("Category:", categName);
  console.log("Elements:", categNumElem);
});
