const inputText = document.getElementById("input-string");
const translateBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const outputText = document.getElementById("output");

function checkWord() {
  const regex = /^[aeiouAEIOU]/;
  let wordArray = inputText.value.split("");

  if(!inputText.value || !isNaN(inputText.value)) {
    outputText.textContent = 'Type in a word';
    return;
  }

  for (let x = 0; x < wordArray.length; x++) {
    if (regex.test(wordArray[0])) {
      const endings = ['hay', 'yay', 'nay', 'way'];
      const randomEnding = endings[(Math.floor(Math.random() * endings.length))];
      outputText.textContent = wordArray.join("") + randomEnding;
      return;

    } else if (regex.test(wordArray[1])) {
      const consonant = wordArray.shift();
      wordArray.push(consonant);
      outputText.textContent = wordArray.join("") + 'ay';
      return;

    } else if (regex.test(wordArray[x])) {
      const consonants = wordArray.splice(0, x).join("");
      wordArray.push(consonants);
      outputText.textContent = wordArray.join("") + 'ay';
      return;
      
        }   
  }
  
};

function reset() {
  inputText.value = '';
}

translateBtn.addEventListener("click", checkWord);
resetBtn.addEventListener("click", reset);

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWord();
  } else if (e.key === "Shift") {
    reset();
  }
})

