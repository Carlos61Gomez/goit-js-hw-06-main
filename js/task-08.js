const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const formElements = loginForm.elements;
  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== 'submit') {
      if (element.value.trim() === '') {
        alert('Todos los campos deben ser completados');
        return;
      }
      formData[element.name] = element.value;
    }
  }

  console.log(formData);
  loginForm.reset();
});
