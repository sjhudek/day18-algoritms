/*
// Problem #1
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
// Write a function which, given a year as a number, returns whether that number is a leap year.

function findLeapYears(startingYear, endingYear) {
    for (var i = startingYear; i < endingYear; i++) {
        if (i % 100 === 0) {
            if (i % 400 === 0) {
                console.log('the year is : ' + i);
            }
        } else if (i % 4 === 0) {
            console.log('the year is : ' + i);
        }
    }
}

findLeapYears(1888, 2017);
*/

/*
// Problem #3
// Write a function which takes an array of integers > 0 and 
// returns the first integer which does not appear in that array.

var num = [1,2,3,4,5]
var missing = [];

for(var i = 1; i <= num; i++) {
    if( num.indexOf(i) === -1){
        missing.push(i);
    }
}
console.log(missing);
*/


/*
// Problem #4

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

var english = "Hetay uickqay rownbay oxfay";

function createEnglish( sentence ) {
	var result = [];
	var workArray = [];
	console.log(sentence);

	workArray = sentence.split(' ')
	console.log(workArray)

	workArray.forEach(function( element, index ) {
		var ay = "ay";
		result.push(ay.substr(0, ay.length-2));
		result.push()
	});
	result[0] = result[0].substr(0,1).toUpperCase() + result[0].substr(1);
	console.log(result[0]);
	console.log(result.join(" "));

	return result;
}
console.log(createEnglish(english));
*/
/*
// Problem #6
// Write a function which takes in two arrays and determines if they contain the same number of the same values.
// Use .map

if (arrayOne.length === arrayTwo.length) {
        arrayOne.sort();
        arrayTwo.sort();

        //arrayOne is primary array
        if (arrayOne.every(function (arrOneElement, i) {
                return ((typeof arrOneElement === typeof arrayTwo[i]) && (arrOneElement === arrayTwo[i]));
            })) {
            console.log(' ArrayOne [' + arrayOne + '] and ArrayTwo [' + arrayTwo + '] - MATCH!');
            return;
        } else {
            console.log('No Matching Here - ArrayOne : [' + arrayOne + '] does not match ArrayTwo : [' + arrayTwo + ']');
            return;
        }

    } else {
        console.log(' Length does not match - ArrayOne : [' + arrayOne + '] does not match ArrayTwo : [' + arrayTwo + ']');
        return;
    }
}

function testAssertEqual() {
    assertEqual([], []); // pass
    assertEqual([2, 3, 4], [1, 2, 3]); // fail
    assertEqual([2, 3, 4], [2, 3, 4]); // pass
    assertEqual([1, 1, 1], [1, 1, 1, 1]); //fail
    assertEqual([2, 2, 2], [2, 2, 2]); // pass
    assertEqual(["a", "c", "b"], ["a", "d", "c"]); //fail
    assertEqual(["a", "c", "b"], ["a", "b", "c"]); //pass

    assertEqual(["a", "B", "c"], ["a", "B", "C"]); //fail
    assertEqual(["a", "B", "c"], ["a", "B", "c"]); //pass
    assertEqual(["a", "b", "c"], ["a", "B", "c"]); //pass
    assertEqual(["a", "B", "c"], ["a", 5, "c"]); // fail 
    assertEqual(["a", 5, "c"], ["a", 5, "c"]); // pass
    assertEqual([true], [false]); //fail
    assertEqual([true], [true]); // pass
}

testAssertEqual();

/*


// Problem #7
// Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with 
// elements limited by the cutoff value.

var makeCutOffArray = function (numbers, cutOff) {
    var result = [];
    numbers.forEach(function (element) {
        if (element <= cutOff) {
            result.push(element);
        } else {
            result.push(cutOff);
        }
    });

    return (result);
}
*/

/*
// Problem #8
// Write a function which takes no input and returns an array of 10 distinct randomly generated 
// integers between 1 and 100.

var nums = function () {
    var result = [];
    var maybeNumber = 0;

    while (result.length < 10) {
        maybeNumber = getRandomInteger(1, 100);
        if (result.indexOf(maybeNumber) === -1) {
            result.push(maybeNumber);
        }
    }
    return result;
};

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/

/*

// Problem #9
// Write a function which takes two sorted lists and merges them into a new sorted list.


const compareNumbers = (a, b) => {
    return (a - b);
}

function mergeSortedLists(listOne, listTwo) {
    var result = [];
    result = listOne.concat(listTwo);
    result.sort(compareNumbers);
    return (result);
}


*/

/*
// Problem #10
// Write a function which accepts two arrays as input. The function should remove all the 
// items from the shorter array, and add them to the end of the longer array. If both arrays 
// are the same length, the function should do nothing. This function does not need to return a value.

var numbers = [1,2,3,4]
var animals = ['dog', 'elephant', 'spider']

function combineArray(arr1, arr2) {
    var result = [];

    if (arr1.length > arr2.length) {
        result = arr1.concat(arr2);
        return (result);
    }

    if (arr2.length > arr1.length) {
        result = arr2.concat(arr1);
        return (result);
    }

    return;
}
*/

/*

// Problem #11
// Write a function that uses `Math.random()` to generate a random number between 0-1. 
// Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. 
// Note that this function should return a `number`, not a `string`.

function prob() {
	var workNum = Math.random();
	var workStr = workNum.toString();
	var workArr = aorkStr.split('');
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
	console.log(parseFloat(result.join(''));)
});


*/

/*

// Problem #12
// Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

function findTheLongestWord(sentence) {
    var result = [];
    var workArr = [];
    var workLengthArr = [];
    var maxLength = null;

    workArr = sentence.split(' ');

    workLengthArr = workArr.map(function (element) {
        return (element.length);
    });

    maxLength = Math.max.apply(Math, workLengthArr);

    result = workArr.filter(function (element) {
        return (element.length === maxLength)
    });

    return (result.join(' '));

*/

/*



// Problem #13
// Write a function which accepts a sentence as a string. Capitalize the first letter of 
// each word of the string, and return that.


function firstLetter(sentence) {
    var result = [];
    var workArr = [];

    workArr = sentence.split(' ');
    result = workArr.map(function (element) {
        return (capitalizeFirstLetter(element));
    });

    return (result.join(' '));
}

*/

/*

// Problem #14
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
// Write a function which takes one argument, and returns true if that argument is a whole 
// number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, 
// is a decimal number, or is not a number at all, return false. 


function isWholeNumber(num) {
    if(num % 1 === 0 ){
      console.log("Yay!");
    }
  else {
    console.log('Try again!')
  }
}

isWholeNumber();

*/


/*

// Problem #17
// Write a function which returns a random integer from 1 to 10.

function randomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (10 - 1)) + 1;
}

console.log(randomNum())
*/
