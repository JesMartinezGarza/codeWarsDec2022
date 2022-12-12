// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let sum = 0
    
    if(number < 0){
      number = number * -1
    }else
      number = number
    
    let numberAsString = number.toString()
    for(let i = 0; i<numberAsString.length; i++){
      sum += Number(numberAsString[i])
    }
    return sum
}