// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let average = sum / array.length
    if(array.length === 0){
      return 0
    }else
    return average
}