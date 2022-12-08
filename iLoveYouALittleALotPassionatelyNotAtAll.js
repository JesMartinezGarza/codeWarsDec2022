// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    // your code
  let n = nbPetals;
  if(n > 6){
    n = n % 6
  } 
  
  if(n === 1){
    return 'I love you'
  }else if(n === 2){
    return 'a little'
  }else if(n === 3){
    return 'a lot'
  }else if(n === 4){
    return 'passionately'
  }else if(n === 5){
    return 'madly'
  }else if(n === 6 || n === 0){
    return 'not at all'
  }
}