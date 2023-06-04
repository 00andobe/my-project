// Get references to the necessary HTML elements
const capitalizeBtn = document.getElementById('capitalizeBtn');
const sentenceInput = document.getElementById('sentenceInput');
const outputDiv = document.getElementById('output');

// Add event listener to the button
capitalizeBtn.addEventListener('click', () => {
  const inputSentence = sentenceInput.value;
  const capitalizedSentence = capitalizeFirstLetterOfWords(inputSentence);
  outputDiv.textContent = capitalizedSentence;
});

// Function to capitalize the first letter of a word
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeFirstLetterOfWords(sentence) {
  const words = sentence.split(' ');
  const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
  return capitalizedWords.join(' ');
}
