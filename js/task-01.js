const categories = document.querySelectorAll("li.item");
const numCategories = categories.length;
console.log("Number of categories:", numCategories);

categories.forEach((category) => {
  const categName = category.querySelector("h2").textContent;
  const categNumElem = category.querySelectorAll("li").length;
  console.log("Category:", categName);
  console.log("Elements:", categNumElem);
});
