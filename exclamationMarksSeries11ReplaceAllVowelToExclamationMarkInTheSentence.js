// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    //coding and coding....
    let newStr = ''
    for(let i = 0; i<s.length; i++){
      if(s.charAt(i).toLowerCase() !== 'a' && s.charAt(i).toLowerCase() !== 'e' && s.charAt(i).toLowerCase() !== 'i' && s.charAt(i).toLowerCase() !== 'o' && s.charAt(i).toLowerCase() !== 'u'){
        newStr += s.charAt(i)
      }else
        newStr += '!'
    }
    return newStr
}