// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
    str = str.split(' ')
    let newArray = []
    for(let i = 0; i < str.length; i++){
      let element = str[i]
      let newElement = []
      for(let i = 0; i < element.length; i++){
        newElement.unshift(element.charAt(i))
      }
      newArray.push(newElement.join(''))
    }
    return newArray.join(' ')
}