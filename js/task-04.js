 // Variable para almacenar el valor actual del contador
 let counterValue = 0;

 // Referencia al elemento span que muestra el valor del contador
 const valueElement = document.getElementById("value");

 // Referencias a los botones de incremento y decremento
 const incrementButton = document.querySelector("[data-action='increment']");
 const decrementButton = document.querySelector("[data-action='decrement']");

 // Función para aumentar el valor del contador
 function incrementCounter() {
   counterValue++;
   updateCounter();
 }

 // Función para disminuir el valor del contador
 function decrementCounter() {
   counterValue--;
   updateCounter();
 }

 // Función para actualizar la interfaz con el nuevo valor del contador
 function updateCounter() {
   valueElement.textContent = counterValue;
 }

 // Agregar escuchas de clic a los botones
 incrementButton.addEventListener("click", incrementCounter);
 decrementButton.addEventListener("click", decrementCounter);
