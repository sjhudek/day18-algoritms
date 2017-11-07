/*
// Problem #1
// ****** This works *****
// Write a function which takes an array of numbers, and returns the largest number in that array.

var num = [4, 2, 5, 1, 3];
num.sort(function(a, b) {
  return a - b;
});
console.log(num);

console.log(num.pop())
*/

/*
// Problem #2
// ***** This works ****
// Write a function which, given a year as a number, returns whether that number is a leap year.
// *** This returns either true or fales ****

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(leapYear(2017));
*/

/*
// Problem #3
// ***** This works *****
// Write a function which takes an array of integers > 0 and 
// returns the first integer which does not appear in that array.

// An array of integers > 0
var numbers = [7,5,1];

function missingNumber() {
  numbers.sort(); // [1,5,7]
  console.log(numbers);

  for ( var i = 0; i < numbers.length; i++ ) {
      for( var j = 0; j < numbers.length; j++){
         if ( numbers[i] + 1 !== numbers[j] ) {
           return (numbers[i] + 1 );
         }
      }
    }
  }

console.log(missingNumber());
*/


/*
// Problem #4
// ****** This works ****

var nums = [1,4,4,4,2,2,4,4,4];
var newNums = [];

function prob( crap ) {
	for(var i = 0; i < crap.length; i++){
      if (newNums.indexOf(crap[i]) === -1) {
        newNums.push(crap[i]);
      }
      
  }
  return newNums;
};

console.log(prob(nums));
*/


/*
// Problem #5
// Write function that translates a text to Pig Latin, 
 // and another that translates back. English is translated 
 // to Pig Latin by taking the first letter of every word, 
 // moving it to the end of the word and adding "ay".

// input is the string "The quick brown fox"
// output is a string

// relationship between the two 
// input transformed into the out of pig latin

// ****** Converts TO Pig Latin *****************
var pigLatin = "The quick brown fox";

function createPigLatinWord( sentence ) {
	var result = [];
	var workArray = [];
	console.log(sentence);

	workArray = sentence.split(' ')
	console.log(workArray)

	workArray.forEach(function( element, index ) {
		result.push(element.substr(1) + element.substr(0, 1).toLowerCase() + 'ay');
	});
	result[0] = result[0].substr(0,1).toUpperCase() + result[0].substr(1);
	console.log(result[0]);
	console.log(result.join(" "));

	return result;
}

console.log(createPigLatinWord(pigLatin));


// ****** Converts BACK to English *****************

// INPUT = string
// Convert words in into an array
// 
// OUTPUT = string

var english = "Hetay uickqay rownbay oxfay";

function createEnglish( sentence ) {
    var result = [];
    var workArray = [];
    console.log(sentence);

    // Convert word string into string array of words
    workArray = sentence.split(' ')
    console.log(workArray)

    // Remove "ay" from end of each word
    workArray.forEach(function( element, index ) {
        result.push(element.slice(0, element.length-2));
      console.log(result);
      
//     reverse the order of the letters of each word
        result.push(element.split("").reverse().join(""));
      console.log(result);
      
    });

    return result;
}
console.log(createEnglish(english));

*/

/*
// Problem #6
// ******** This works ********
// Write a function which takes in two arrays and determines if they contain the same number of the same values.

// Different numbers
// var array1= [47, 81, 77, 46, 47, 17, 90, 63, 100, 43];
// var array2= [12, 18, 20, 11, 19, 14, 6, 7, 8, 16, 9, 3, 1, 13, 5, 4, 15, 10, 2, 17];

// Same numbers, different order
// var array3= [47, 81, 77, 46, 47, 17, 90, 63, 100, 43];
// var array4= [17, 100, 81, 63, 43, 47, 90, 46, 77, 47];

if(array1.sort().join(',') === array2.sort().join(',')){
    console.log('The two arrays have the same number of the same values');
}
else {
  console.log('The two arrays DO NOT have the same number of the same values');
  }
*/


/*
// Problem #7
// ******** This works ***********
// Write a function which takes in an array of numbers and a 
// max cutoff value, and returns a new array with 
// elements limited by the cutoff value.

var i;
for (i = 0; i < 10; i++) {
    if (i === 9) { 
      break; 
  }
  console.log(i);
};
*/

/*
// Problem #8
// ***** This works ******
// Write a function which takes no input and returns an array of 10 distinct randomly generated 
// integers between 1 and 100.

// create an empty array called 'result'
var result = []

// As long as the array is < 10 ...
while(result.length < 10){
    // create variable 'randomNumber'
    // to equal a random number
    // between 1 and 100
    var randomNumber = Math.floor(Math.random()*100)
    console.log(randomNumber);

    // if randomNumber index is greater than
    // -1 then skip the loop and
    // create an array of 10 random numbers in 'result'
    if (result.indexOf(randomNumber) > -1) continue;
    result[result.length] = randomNumber;
}
console.log(result);


/*

// Problem #9
// ******* It works!!!! ******
// Write a function which takes two sorted lists and merges them into a new sorted list.

var listOne = [1, 2, 3, 4, 5];

var listTwo = [6, 7, 8, 9, 10];

const compareNumbers = (a, b) => {
    return (a - b);
}

function mergeSortedLists(listOne, listTwo) {
    var result = [];
    result = listOne.concat(listTwo);
    result.sort(compareNumbers);
    return (result);
}

console.log(mergeSortedLists(listOne, listTwo));

*/

/*
// Problem #10
// ******* It works!!!! *****
// Write a function which accepts two arrays as input. The function should remove all the 
// items from the shorter array, and add them to the end of the longer array. If both arrays 
// are the same length, the function should do nothing. This function does not need to return a value.

// var numbers = [1,2,3,4];
// var animals = ['dog', 'elephant', 'spider', 'cat', 'lion'];

// function combineArray(arr1, arr2) {

//     if (arr1.length > arr2.length) {
//         arr1.push.apply(arr1, arr2);
//         return (arr1);
//     }

//     if (arr2.length > arr1.length) {
//         arr2.push.apply(arr2, arr1);
//         return (arr2);
//     }

//     return;
// };

// console.log(combineArray(numbers, animals));
*/


/*
// ****** Problem #11 ********
// Write a function that uses `Math.random()` to generate a random number between 0-1. 
// Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. 
// Note that this function should return a `number`, not a `string`.

function prob() {
	var workNum = Math.random();
	var workStr = workNum.toString();
	var workArr = workStr.split('');
	var result = [];

	result = workArr.map(function(element){
		if(element === 3) {
			element = 8;
		}

		if (element === 7) {
			element = 1;
		}
		return element;
	})
	// console.log(parseFloat(result.join(''));
};

console.log(prob())
*/


/*
// Problem #12
// ******* works (sort of) *********
// Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

// returns length in character count
// not sureif that's exaclty what you're looking for?

function findTheLongestWord(str) {
        // split the string into an array of words
     var wordArray = str.split(' ');
     console.log(wordArray);
        // variable holds longest word
     var wordLength = 0;
     console.log(wordLength);
        // loop through each word
        // compare the length of each word to
        // the previous one
        // if it's longer then store it
        // in wordLength
     for (var i = 0; i < wordArray.length; i++){
         if (wordArray[i].length > wordLength){
           wordLength = wordArray[i].length;
         };
     };
     return wordLength;
};

console.log(findTheLongestWord("The quick brown fox jumps over the lazy dogs back"));
*/

/*
// Problem #13
// ***** It works!!! ****
// Write a function which accepts a sentence as a string. Capitalize the first letter of 
// each word of the string, and return that.

// "The quick brown fox jumped over the lazy dog."

function capitalizeFirstLetter(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(capitalizeFirstLetter("The quick brown fox jumped over the lazy dog."));
*/


/*
// Problem #14
// ****** It works!!!!! ********

// Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns 
// the number of days between them.
// '1998/01/24', '1999/01/25' -> 366

// input = two strings
// output = number

// relationship between input and output is
// string converted into number

function daysBetweenDates(date1, date2) {
    var result = null;
    const oneDayMs = 1000 * 60 * 60 * 24;
    var firstDateMs = Date.parse(date1);
    var secondDateMs = Date.parse(date2);

    result = Math.abs((secondDateMs - firstDateMs) / oneDayMs);
    console.log(result + ' days between the the two dates');

    return (result);
}

console.log(daysBetweenDates('1998/01/24', '1999/01/25'))

*/

/*
// Problem #15
// Write a function called `add` that adds two numbers together, and returns the result. 
// The function must be defined such that it can be called in two different ways to achieve 
// the same result. See the example below:

// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// ```

var replaceNumbers = function(){
    var randomNumber = Math.random()
    var randomNumberAsString = randomNumber.toString()
    var randomNumberAsArray = randomNumberAsString.split('')
    // console.log(randomNumberAsArray)
    for ( var i = 0; i < randomNumberAsArray.length; i++ ) {
        if ( randomNumberAsArray[i] === '3') {
            randomNumberAsArray[i] = '8'
        }
        else if ( randomNumberAsArray[i] === '7') {
            randomNumberAsArray[i] = '1'
        }
    }
    return parseFloat(randomNumberAsArray.join(''))
}

// console.log(replaceNumbers())


var add = function(a, b){

    if ( typeof b === 'number' ){
        return a + b
    }
    else if ( typeof b === 'undefined' ) {
        var addOneNumber = function(num) {
            return a + num
        }
        return addOneNumber
    }
}

console.log(add(5,2))

console.log(add(5)(2))
*/

/*
// Problem #16
//****** It works!!!! *******
// Write a function which takes one argument, and returns true if that argument is a whole 
// number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, 
// is a decimal number, or is not a number at all, return false. 


function isWholeNumber(num) {
    if ( num < 0 ){
      return num.toFixed(2);
  };
    else if((typeof num === 'number') && (num % 1 === 0)){
      return true;
    };
    else {
      return false;
    };
};

console.log(isWholeNumber(-10));
*/

/*
// Problem #17
// ****** It works!!!!! *******
// Write a function which returns a random integer from 1 to 10.

function randomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (10 - 1)) + 1;
}

console.log(randomNum())
*/

