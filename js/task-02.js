const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Obtener el elemento ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Recorrer el array de ingredientes y generar los elementos de la lista
ingredients.forEach((ingredient) => {
  // Crear un elemento li
  const listItem = document.createElement('li');
  
  // Establecer el texto del elemento li
  listItem.textContent = ingredient;
  
  // Agregar el elemento li a la lista ul
  ingredientsList.appendChild(listItem);
});

