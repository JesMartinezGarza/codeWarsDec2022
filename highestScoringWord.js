// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let separateWordArray = x.split(' ')
    let sum
    let index
    let arrayOfSums = []
    for(let i = 0; i < separateWordArray.length; i++){
      sum = 0
      index  = i
      for(let i = 0; i < separateWordArray[index].length; i++){
        sum += Number(separateWordArray[index].charCodeAt(i)) - 96
      }
      arrayOfSums.push(sum)
    }
    let indexOfLargest = arrayOfSums.indexOf(Math.max(...arrayOfSums))
    return separateWordArray[indexOfLargest]
}