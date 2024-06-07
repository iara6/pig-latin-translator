const inputText = document.getElementById("input-string");
const translateBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const outputText = document.getElementById("output");

function translate() {
  const regex = /^[aeiouAEIOU]/;
  const regexPunctuation = /[.,:;?!]$/;
  const endings = ['hay', 'yay', 'nay', 'way']; 
  let words = inputText.value.split(" ");

  if(!inputText.value || !isNaN(inputText.value)) {
    outputText.textContent = 'Type in a word or phrase';
    return;
  }

  let translatedWords = words.map(word => {
    let punctuation = ''; 
    let wordWithoutPunctuation = word;

    if (regexPunctuation.test(word)) {
      punctuation = word.slice(-1);
      wordWithoutPunctuation = word.slice(0, -1);
    }

    let wordArray = wordWithoutPunctuation.split("");
  
    if (regex.test(wordArray[0])) {
      const randomEnding = endings[(Math.floor(Math.random() * endings.length))];
      return wordArray.join("") + randomEnding + punctuation;

    } else {
      for (let x = 0; x < wordArray.length; x++) {
        if (regex.test(wordArray[x])) {
          const consonants = wordArray.splice(0, x).join("");
          wordArray.push(consonants);
          return wordArray.join("") + 'ay' + punctuation;
      }
    }
     return wordWithoutPunctuation + 'ay' + punctuation;   
   }   
});
  outputText.textContent = translatedWords.join(" ");
}

function reset() {
  inputText.value = '';
  outputText.textContent = '';
}

translateBtn.addEventListener("click", translate);
resetBtn.addEventListener("click", reset);

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    translate();
  } else if (e.key === "Control") {
    reset();
  }
})

