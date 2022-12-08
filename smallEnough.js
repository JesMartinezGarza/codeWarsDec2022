// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  
    let trues = 0;
    let falses = 0;
  
    a.forEach(element => {
      if(element <= limit){
        trues += 1
      }else
        falses += 1
    });
  
    if(falses > 0){
      return false
    }else
      return true
}