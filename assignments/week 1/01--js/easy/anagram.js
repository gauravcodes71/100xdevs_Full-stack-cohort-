/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// function isAnagram(str1, str2) {

// }

// module.exports = isAnagram;


function sort(str){
    let array = str.split("");
    // let array = str.split("");
    array = array.sort();
    let sortedarray = array.join("");
    return sortedarray;
  }
  
  function isAnagram(str1, str2){
    var str1LowerCase = str1.toLowerCase();
    var str2LowerCase = str2.toLowerCase();
  
    if(sort(str1LowerCase) == sort(str2LowerCase)){
      return true;
    }
    else{
      return false;
    }
  }
  
  let ans = isAnagram("varuag","gaurav");
  console.log(ans);
  