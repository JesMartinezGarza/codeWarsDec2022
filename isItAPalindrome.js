// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    x = x.toLowerCase()
    let xReversed = x.split('').reverse().join('')
    return x === xReversed
}