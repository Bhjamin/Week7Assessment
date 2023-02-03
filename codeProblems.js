

const addToZero = (arr) => {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }

    return false
}

// I think the time complexity of the addToZero function is O(n^2) 
// because there is a nested for loop in the function



const hasUniqueChars = (str) => {
    let set = new Set();
  for (let char of str) {
    if (set.has(char)) {
      return false;
    } else {
      set.add(char);
    }
  }
  return true;
}


// I think the time complexity of this function is O(n) because 
// the time to complete might increase if the string gets bigger




const isPangram = (str) => {
    let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for(let char of lowerCaseAlphabet) {
      if (!sentence.includes(char)) {
        return false;
      }
    }
    for(let char of upperCaseAlphabet) {
      if (!sentence.includes(char)) {
        return false;
      }
    }
    return true;
}

// I think this time complexity is O(n) because 
// the loops are not nested so it just depends on the length of the sentence passed in


const arrr = ['beng', 'stevenson', 'bengal', 'two']

const findLongestWord = (arr) => {
    let length = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > length){
            length = arr[i].length
        }
        
    }
    return length
    
}

// This codes time complexity is O(n) because 
// it is just one for loop dependant on the length of the arr passed in 