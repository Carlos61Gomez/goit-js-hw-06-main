const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  const inputLength = parseInt(validationInput.dataset.length);
  const inputValue = validationInput.value.trim();
  
  if (inputValue.length === inputLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});