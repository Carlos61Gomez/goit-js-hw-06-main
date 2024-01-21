const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  const inputValue = nameInput.value.trim();

  if (inputValue === '') {
    nameOutput.textContent = 'Anónimo';
  } else {
    nameOutput.textContent = inputValue;
  }
});