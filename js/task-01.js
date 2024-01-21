// Obtener el elemento ul#categories
const categoriesList = document.querySelector('#categories');

// Obtener todos los elementos li.item dentro de ul#categories
const items = categoriesList.querySelectorAll('li.item');

// Contar y mostrar el número de categorías
console.log(`Número de categorías: ${items.length}`);

// Recorrer cada elemento li.item
items.forEach((item) => {
  // Obtener el título del artículo (tag <h2>)
  const title = item.querySelector('h2').textContent;

  // Obtener el número de artículos en la categoría (todos los elementos <li> anidados)
  const articleCount = item.querySelectorAll('li').length;

  // Mostrar el título del artículo y el número de artículos en la categoría
  console.log(`Título del artículo: ${title}`);
  console.log(`Número de artículos en la categoría: ${articleCount}`);
});