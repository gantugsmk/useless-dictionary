// Object to store the dictionary
let dictionary = {};

// Get the form and the word list element
const addWordForm = document.getElementById('add-word-form');
const wordList = document.getElementById('word-list');

// Handle form submission
addWordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the word and definition from the form
  const word = document.getElementById('word').value;
  const definition = document.getElementById('definition').value;

  // Add the word and definition to the dictionary
  dictionary[word] = definition;

  // Add the word and definition to the word list
  const newWord = document.createElement('div');
  newWord.innerHTML = `<strong>${word}</strong> - ${definition}`;
  wordList.appendChild(newWord);

  // Clear the form
  document.getElementById('word').value = '';
  document.getElementById('definition').value = '';
});

// Handle saving the dictionary
const saveDictionaryButton = document.getElementById('save-dictionary');
saveDictionaryButton.addEventListener('click', () => {
  // Convert the dictionary to a JSON string
  const dictionaryJson = JSON.stringify(dictionary);

  // Create a link to trigger a download
  const downloadLink = document.createElement('a');
  downloadLink.href = 'data:application/json,' + encodeURIComponent(dictionaryJson);
  downloadLink.download = 'dictionary.json';

  // Trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
