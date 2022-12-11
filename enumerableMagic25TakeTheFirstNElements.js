// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
    // Your code here
    let newArr = []
  
      if(arr.length === 0){
        return newArr
      }else if(arr.length < n){
        for(let i = 0; i<arr.length; i++){
          newArr.push(arr[i])
        }
          return newArr
      }else
        for(let i = 0; i<n; i++){
          newArr.push(arr[i])
        }
          return newArr
}