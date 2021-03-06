/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var plusOneSum = function(intArr) {
	finalSum = 0;
	for (var i = 0; i < intArr.length; i++) {
		intArr[i] = intArr[i] + 1;
	}
	for (var j = 0; j < intArr.length; j++) {
		finalSum = intArr[j] + finalSum;
	}
	return finalSum;
}

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
//also can look up 'reduce'

var flatten = function(inpArr) {
	var newArr = inpArr.join();
	var flattened = [];
	for (var i = 0; i < newArr.length; i++) {
		if (newArr[i] !== ',') {

		}
	}
}

//also can look up 'reduce'
/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/



/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
var longestWords = function(str) {
	var newStr = str.split(' ');
	var longest = [];
	var length = 0;
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i].length === length) {
			longest.push(newStr[i]);
		} else if (newStr[i].length > length) {
			length = newStr[i].length;
			longest = [];
			longest.push(newStr[i]);
		}
	}
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
