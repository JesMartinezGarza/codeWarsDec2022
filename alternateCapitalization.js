// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let newArr = []
    let newStr = ''
    let secondNewStr = ''
    newStr += s.charAt(0)
    
    for(let i = 1;i<s.length;i++){
      if(newStr.charAt(i-1) === newStr.charAt(i-1).toUpperCase()){
        newStr += s.charAt(i).toLowerCase()
      }else
        newStr += s.charAt(i).toUpperCase()
    }
    
    newArr.push(newStr)
    
    if(newStr.charAt(0) ===   newStr.charAt(0).toUpperCase()){
      secondNewStr += newStr.charAt(0).toLowerCase()
    }else
      secondNewStr += newStr.charAt(0).toUpperCase()
  
  
    for(let i = 1;i<s.length;i++){
      if(secondNewStr.charAt(i-1) === secondNewStr.charAt(i-1).toUpperCase()){
        secondNewStr += s.charAt(i).toLowerCase()
      }else
        secondNewStr += s.charAt(i).toUpperCase()
    }
    
    newArr.unshift(secondNewStr)
  
    return newArr
};