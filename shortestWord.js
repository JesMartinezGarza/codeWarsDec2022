// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    s = s.split(' ')
    let arrayOfLengths = []
    for(let i = 0; i<s.length; i++){
      arrayOfLengths.push(s[i].length)
    }
    arrayOfLengths.sort((a,b) => a-b)
    return arrayOfLengths[0]
}