// problem1: Write a function that takes a string and returns the 
//first character of the string. Test your function on a few 
//inputs, including the empty string.
function firstLetter (string){
    return string[0];
}
//console.log(firstLetter ("Tony"));


// problem 2 node answers.js Write a function that takes a string 
//and returns the last character of a string. Test your function on a few inputs, including the empty string.
function lastLetter(string){
    
    //return string.charAt(string.length - 1);
    
    var length = string.length;
    var last = string.substring(length - 1, length);
    return last;
}
//console.log(lastLetter("Tony"));


//Problem 3: Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
// function
function findCharacter(string, number){
    return string.charAt(number);
}
//console.log(findCharacter("Tony", 1));

    
//Problem 4: Write a function that takes two numbers and adds them 
//together. Test your function on a few inputs. Write in the 
//comments what happens when you pass something other than a number to your function.
function add (number1, number2){
    return number1 + number2;}
//console.log(add (9,1));
//console.log(add (4,5));



//Problem 5: Write a function that takes two numbers and multiplies
//them together. Test your function on a few inputs. Write in your 
//comments what happens when you pass something other than a 
//number to your function.
function multiply (number1, number2){
    return number1*number2;
}
//console.log(multiply (3,5));
//console.log(multiply (9, 2));



//Problem 6: Write a function that takes two numbers and a string. If
//the string is ‘add’, then return the sum of the numbers. If the 
//string is ‘subtract’, return the difference. If the string is 
//‘mult’, return the product. If the string is ‘div’, return the 
//ratio. Otherwise return 0.
function mathOperation (number1, number2, string){
    if (string === "add"){
        return number1 + number2;
    }
    else if (string === "subtract"){
        return number1 - number2;
    }
    else if (string === "mult"){
        return number1 * number2;
    }
    else if (string === "div"){
        return number1 / number2;
    }
    else {
    return 0;
    }
}
//console.log(mathOperation(2,3,"mult"));
//console.log(mathOperation(5,6,"subtract")); 



//Problem 7: Write a function that takes a string and a number, and 
//returns the string repeated that many number of times. Test your 
//function with various inputs.
function repeatedString (string, number){
    return string.repeat(number);
}
//console.log(repeatedString ("Great", 9));



//Problem 8: Write a function that takes a string, and returns the 
//reverse of that string. For example, if you pass the function the
//string “hello”, it should return “olleh”. Test your function on a
//few inputs, including the empty string. 
function reversedString (string){
    return string.split("").reverse().join("");
}
//console.log(reversedString ("Hey"));
//console.log(reversedString ("coding"));



//Problem 9: Write a function that takes a number and returns the 
//factorial of a number. The factorial of 5 is 5x4x3x2x1. The 
//factorial of 0 is 1. Test your input on a few numbers, including
//negative numbers.

function factorial (number){
    if (number <= 0){
        console.log("Undefined");
    } 
    else {
    var sum = 1;
    for (var i = 2; i <= number; i += 1){
        sum = sum * i;
    }
    return sum;
    }
}
//console.log(factorial(19)); 
//console.log(factorial(9));



//Problem 10: Write a function that takes a phrase as a string, 
//and returns the longest word in that phrase. If the phrase 
//contains more than one such word, return the first occurrence. 
//Test your function on a few inputs.
function longestWord(string){
    var str = string.split(" ");
    var longest = 0; 
    var word = ''; // after the equal sign (=), we can also write "null" or "[]" instead of "''". However it is better to use what is used here, which is '', because we know it will be a string that we will be comparing.
    for (var i = 0; i < str.length; i++ ){
        if (longest < str[i].length){
            longest = str[i].length;
            word = str[i]
        }
    }
    return word;
}
//console.log(longestWord("It is a wonderful world"));



//Problem 11: Write a function that takes a phrase, and returns 
//the same phrase with every word capitalized. For example, if you
//pass your function "hello world", it should return "Hello World" 
//and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will
//also return "Hello World". Test your function of a few inputs.
function capitalizeWords(phrase) {
   var firstArray = phrase.split(" ");
   var finalArr = [];
   for(var i = 0; i < firstArray.length; i++){
       var firstLetter = firstArray[i].charAt(0).toUpperCase();
       var restOfWord = firstArray[i].substring(1).toLowerCase(); // eventhough it is .substring(1) but Javascript will not only check at position 1, but it will check until the end of that word. That is how it works!
       var finalWord = firstLetter + restOfWord;
       finalArr.push(finalWord);
       var finalPhrase = finalArr.join(" ");
   }
  return finalPhrase;
}
//console.log(capitalizeWords("How are yOu"));



//Problem 12: Write a function that takes an array and returns the 
//largest number of the array. Test your function on a few inputs.
function largestNumber (array){
    return Math.max.apply( null, array );// "null" here is like a reference point. dont worry about it too much. we will learn about it later.
} 
//console.log(largestNumber([5,9,99]));



//Problem 13: Write a function that takes an array, and returns a 
//filtered array. The filtered array should only contain the 
//truthy values from the initial array. Hint: there is an array 
//method called filter that can help you with this :)
function filteredArray (array){
    var truthy = [];  // 'truthy' means something that has value. for example 0, null, "undefined", "false", or a blank array is not truthy. so if the array contains these terms, they will not be pushed into the array. 
    for(var i = 0; i < array.length; i++){
       if(array[i]) {
        truthy.push(array[i]);
       }
    }
    return truthy;
}
console.log(filteredArray([1, "Apple", 0, null, 9, "Yes"]));



//Problem 14: Write a function that takes an array of numbers, and
//returns the sum of all the numbers in the array.
function sum(array){
    var originalSum = 0;
    for (var i = 0; i < array.length; i++){
        originalSum = originalSum + array [i];
    }
    return originalSum;
}
console.log(sum([1, 5, 9, 45, 99]));



//Problem 15: Write a function that takes two arrays, and returns 
//an array of all elements that are only in one array. For example,
//with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. 
//Test your function on different inputs. Hint: you should look
//up array methods indexOf and slice.
function returnFinalArray (array1, array2){
    
}
