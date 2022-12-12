// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    //Write your own Code!
      letter = letter.toUpperCase()
      let positionInAlphabet = (letter.charCodeAt(letter) - 64).toString()
      return `Position of alphabet: ${positionInAlphabet}`
}