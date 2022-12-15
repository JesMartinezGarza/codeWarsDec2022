// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    //your code here
    if(url.includes('http://') === true){
      url = url.replace('http://', '')
    }else
      url = url.replace('https://', '')
  
    if(url.includes('www.') === true){
      url = url.replace('www.', '')
    }
    
    let index = url.indexOf('.')
    return url.slice(0, index)
}