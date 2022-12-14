// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let index
    text = text.replace(/[^a-zA-Z]/g, "")
    text = text.split('')
    for(let i = 0; i<text.length; i++){
      index = i
      if(text[index] === text[index].toUpperCase()){
        text[i] = text[i].charCodeAt(text[i]) - 64
      }else
        text[i] = text[i].charCodeAt(text[i]) - 96
  
        
    }
    return text.join(' ')
}