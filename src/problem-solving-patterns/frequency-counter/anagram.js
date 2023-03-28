// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(x, y){
  if (x.length !== y.length) {
  return false;
  }
  
  const obj = {};
  
  for (let i = 0; i < x.length; i++){
      let letter = x[i];
    // if letter exists, increment, otherwise set to 1
      obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
  }
  
  for (let i = 0; i < y.length; i++){
      let letter = y[i];
    // cant find letter or letter is zero then it is not an anagram
      if (!obj[letter]){
          return false;
      } else {
          obj[letter] -= 1;
      }
  }
  return true;
}
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
