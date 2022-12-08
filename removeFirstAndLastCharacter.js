// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    //You got this!
     let strAsArray = str.split('')
     let newStr = ''
     for(let i = 1; i < strAsArray.length - 1; i++){
       newStr += strAsArray[i]
     }
     return newStr
};