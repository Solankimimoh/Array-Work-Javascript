"use strict"
const prompt = require("prompt-sync")();


function init(){
// get inputs from user  
  // let inputString = prompt("Enter the string: ");
  // let searchInput = prompt("Enter the search charater: ");

  // // pass string and search charecter to find concurrence
  // searchChar(inputString,searchInput);
  // let index= substringSearch(inputString,searchInput);
  // console.log(index);

  // compare two string
  if(compareStrings("Hello","Hello")){
    console.log("Both string are equal");
  }else{
    console.log("Both strings are not equal");
  }
  
}

function searchChar(inputString,searchInput){
  let charCount =0;
  // strart iteration in string using length
  for(let i=0;i<inputString.length;i++){
    // check seachInput in inputString
    if(inputString[i]===searchInput){
      // add one in counter 
      charCount+=1;
    }
  }
    console.log(`${searchInput} is ${charCount} times in ${inputString}`);
  
}

function substringSearch(string, substring) {
  for (let i = 0; i <= string.length - substring.length; i++) {
    let match = true;
    for (let j = 0; j < substring.length; j++) {
      if (string[i+j] !== substring[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }
  return -1;
}

// Compare two string using length and every characters
function compareStrings(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }
  return true;
}


init();