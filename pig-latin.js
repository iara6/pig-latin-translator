
const inputText = document.getElementById("input-string");
const btn = document.getElementById("submit-btn");
const outputText = document.getElementById("output");

function checkWord() {
  const regex = /[aeiouAEIOU]/;
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

    } else if (regex.test(wordArray[1])) {
      const consonant = wordArray.shift();
      wordArray.push(consonant);
      outputText.textContent = wordArray.join("") + 'ay';

    } else if (regex.test(wordArray[x])) {
      const consonants = wordArray.splice(0, x).join("");
      wordArray.push(consonants);
      outputText.textContent = wordArray.join("") + 'ay';
      
        }   
  }
  
};

btn.addEventListener("click", checkWord);
