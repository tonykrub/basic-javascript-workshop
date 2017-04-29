

/*1)Write a function that takes a string and returns the first 
character of the string. Test your function on a few inputs, 
including the empty string. */
function firstLetter (str) {
    return str[0];
};
//console.log(firstLetter("hi"));


/*2) Write a function that takes a string and returns the last 
character of a string. Test your function on a few inputs, 
including the empty string.*/
function lastLetter (str) {
    return str[str.length -1];
};
//console.log(lastLetter("Irene"));


/* 3)Write a function that takes a string and a number, and 
returns the character at the position represented by the number. 
The indexing of number should start at 0. Test your function 
on a few inputs, including the empty string.*/
function characterPosition (str, num) {
    return str[num - 1];
}
//console.log(characterPosition("Tony", 3));


/* 4) Write a function that takes two numbers and adds them 
together. Test your function on a few inputs. Write in the 
comments what happens when you pass something other than a 
number to your function. */
function add (num1, num2) {
    return num1 + num2;
}
//console.log(add(9, 1));


/* 5) Write a function that takes two numbers and multiplies 
them together. Test your function on a few inputs. Write in 
your comments what happens when you pass something other than 
a number to your function. */
function multiply(num1, num2) {
    return num1 * num2;
}
//console.log(multiply(9,9));


/* 6) Write a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. If the 
string is ‘mult’, return the product. If the string is ‘div’, 
return the ratio. Otherwise return 0 */
function mathOperation (num1, num2, str) {
    if (str === 'add') {
        return num1 + num2;
    }
    else if (str === 'subtract') {
        return num1 - num2;
    }
    else if (str === 'mult') {
        return num1 * num2;
    }
    else if (str === 'div') {
        return num1 / num2;
    }
    else {
        return 0;
    }
}
//console.log(mathOperation(5,9,'subtract'));


/* 7) Write a function that takes a string and a number, and 
returns the string repeated that many number of times. Test 
your function with various inputs.*/
function repeatedStr (str, num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(str);
    }
    return arr.join(", "); // if we code 'return arr' only, instead of this, we will get an array. but to join an array, we use 'join'
}
//console.log(repeatedStr("Tony", 9));


/* 8) Write a function that takes a string, and
returns the reverse of that string. For example,
if you pass the function the string “hello”, it
should return “olleh”. Test your function on a 
few inputs, including the empty string. */
function reversedStr(str) {
    return str.split("").reverse().join("");
}
//console.log(reversedStr("yes sir"));


/* 9) Write a function that takes a number and returns the 
factorial of a number. The factorial of 5 is 5x4x3x2x1. The 
factorial of 0 is 1. Test your input on a few numbers, 
including negative numbers. */
function factorial (num) {
    if (num === 0) {
        return 1
    }
    else if (num < 0) {
        console.log("Give me a positive number please.")
    }
    else if (num > 0) {
        var sum = 1;
        for (var i = 1; i <= num; i++) {
            sum = sum * i;
        }
        return sum;
    }
}
//console.log(factorial(-9));


/* 10) Write a function that takes a phrase as a string, and
returns the longest word in that phrase. If the phrase 
contains more than one such word, return the first 
occurrence. Test your function on a few inputs.*/
function longestWord (str) {
    var split = str.split(" ");
    var longest = 0;
    var word = 0;
    for (var i = 0; i < split.length; i++) {
        if (longest < split[i].length) {
            longest = split[i].length;
            word = split[i];
        }
    }
    return word;
}
//console.log(longestWord("Do you love me?"));


/* 11) Write a function that takes a phrase, and returns 
the same phrase with every word capitalized. For example, 
if you pass your function "hello world", it should return 
“Hello World” and if you pass it “HELLO WORLD” or even 
"HeLLo WoRLD", it will also return "Hello World". Test 
your function of a few inputs.*/
function capitalizedWord (str) {
    var split = str.split(" ");
    var firstLetter;
    var restOfWord;
    var finalWord;
    var arr = [];
    for (var i = 0; i < split.length; i++) {
        firstLetter = split[i].charAt(0).toUpperCase();
        restOfWord = split[i].substring(1).toLowerCase();
        finalWord = firstLetter + restOfWord;
        arr.push(finalWord);
    }
    return arr.join(' ');
}
//console.log(capitalizedWord("GLaD to meET yoU"));


/*12) Write a function that takes an array and returns the 
largest number of the array. Test your function on a few 
inputs.*/
function largestNum(arr) {
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
//console.log(largestNum([1, 5, 9, 11199, 999]));
/* or the below is another way to solve this problem:
function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
}
console.log(getMaxOfArray([1, 5, 9, 99, 999]));*/


/* 13) Write a function that takes an array, and returns a 
filtered array. The filtered array should only contain 
the truthy values from the initial array. Hint: there is 
an array method called filter that can help you*/
function truthyValues (arr) {
    var truthy = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]) {
            truthy.push(arr[i]);
        }
    }
    return truthy;
}
//console.log(truthyValues([0, 1, null, 99, "", 9999]));


/* 14) Write a function that takes an array of numbers, and 
returns the sum of all the numbers in the array.*/
function sumArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
//console.log(sumArr([5, 5, 1, 10, 9]));


/* 15) Write a function that takes two arrays, and returns 
an array of all elements that are only in one array. For 
example, with [1,2,3] and [1,2,4,5] the function should 
return [3,4,5]. Test your function on different inputs. 
Hint: you should look up array methods indexOf and slice.  */
function uniqueValue(arr1, arr2) {
    var unique = [];
    for (var i = 0; i < arr2.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            unique.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            unique.push(arr2[i]);
        }
    }
    return unique;
}
console.log(uniqueValue([1, 5, 6, 99, 95], [1, 5, 95, 999, 599]));


/* 16) Mini Challenge: write a function that takes an array and
a function as arguments. The function should return a new 
array that maps every element of the input array by passing
it through the function you received. You are not allowed to 
use Array.map for this challenge, otherwise it would be too
easy :)*/
function mappedArr(arr, func) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        array.push(func(arr[i]));
    }
    return array;
}

// console.log(mappedArr([1,2,3], function(n) { //'n' here is the place holder because we are defining the function here. so it does not have to be the real value, meaning we can put anything here. we are not calling it here ( because we have already called it above earlier). Basically it is arr[i], but we can not put arr[i] here, we have to put 'n' here because it is the way javaScript is designed.
//     return n + 1;
// }));





