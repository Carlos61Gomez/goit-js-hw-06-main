
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  const inputValue = validationInput.value;
  const requiredSymbols = parseInt(validationInput.dataset.length);

  if (inputValue.length === requiredSymbols) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});



const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});
