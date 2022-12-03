// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    // TODO: complete
    let indexOfAnchor = url.indexOf('#')
    if(indexOfAnchor === -1){
      return url
    }else
    return url.slice(0, indexOfAnchor)
}