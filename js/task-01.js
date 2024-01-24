const categoriesElement = document.getElementById("categories");
const categoriesItems = categoriesElement.getElementsByClassName("item");

console.log("Número de categorías:", categoriesItems.length);

for (let i = 0; i < categoriesItems.length; i++) {
  const categoryItem = categoriesItems[i];
  const titleElement = categoryItem.querySelector("h2");
  const itemsList = categoryItem.querySelectorAll("li");

  console.log("Categoría:", titleElement.textContent);
  console.log("Elementos:", itemsList.length - 1);
}