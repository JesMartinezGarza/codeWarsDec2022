// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	// your code here

  let arrLetters = string.split('')
  for(let i = 0;i<arrLetters.length;i++){
    if(arrLetters[i] == '5'){
      arrLetters[i] = 'S'
    }else if(arrLetters[i] == '0'){
      arrLetters[i] = 'O'
    }else if(arrLetters[i] == '1'){
      arrLetters[i] = 'I'
    }else
      arrLetters[i] =  arrLetters[i]
  }
  return arrLetters.join('')
}