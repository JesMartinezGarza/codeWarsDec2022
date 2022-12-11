// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    //your code here
    let array = []
    if(n === 0){
      return 1
    }else
    for(let i = n; i > 0; i--){
      array.push(i)
    }
    return array.reduce((accumulator, currentValue) => accumulator * currentValue,
    1)
}