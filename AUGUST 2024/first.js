const accountId = 144553; // Declaring a constant variable for account ID, which cannot be reassigned
let accountEmail = "hitesh@google.com"; // Declaring a variable for account email, which can be reassigned
var accountPassword = "12345"; // Declaring a variable for account password, which can be reassigned (prefer let/const over var)
accountCity = "Jaipur"; // Assigning a value to an undeclared variable, which makes it a global variable (not recommended)
let accountState; // Declaring a variable for account state, but not initializing it

// accountId = 2 // not allowed because accountId is a constant

// Reassigning values to accountEmail, accountPassword, and accountCity
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId); // Logging the accountId to the console

/*
Prefer not to use var
because of issues in block scope and functional scope.
*/

// Using console.table to display the variables in a tabular format
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// alert( 3 + 3) // This would trigger an alert in a browser, but we are using Node.js, not a browser

console.log(3 + 3); // Adding 3 + 3 and logging the result to the console with proper formatting for readability

console.log("Hitesh"); // Logging a string "Hitesh" to the console

let name = "hitesh"; // Declaring a variable for the name
let age = 18; // Declaring a variable for the age
let isLoggedIn = false; // Declaring a boolean variable to track if the user is logged in
let state; // Declaring a variable for the state, not initialized

// Primitive data types in JavaScript:
// number => integers and floating-point numbers
// bigint => large integers
// string => text data enclosed in quotes
// boolean => true/false values
// null => a standalone value representing "nothing"
// undefined => a variable that has been declared but not initialized
// symbol => a unique and immutable value used as the key for object properties

// Logging the types of undefined and null to the console
console.log(typeof undefined); // Logs "undefined" as the type of undefined
console.log(typeof null); // Logs "object" as the type of null (this is a quirk in JavaScript)
let score = "Aboli";

// The `typeof` operator checks the data type of a variable
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score); // Converts the string "Aboli" to a number (NaN in this case)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Conversion examples:
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn1 = "Aboli";

let booleanIsLoggedIn1 = Boolean(isLoggedIn1); // Converts the string "Aboli" to a boolean (true)
// console.log(booleanIsLoggedIn);

// More conversion examples:
// 1 => true; 0 => false
// "" => false (empty string)
// "Aboli" => true

let someNumber = 33;

let stringNumber = String(someNumber); // Converts the number 33 to a string "33"
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value; // Negates the value, resulting in -3
// console.log(negValue);

// Basic arithmetic operations
// console.log(2+2); // Addition
// console.log(2-2); // Subtraction
// console.log(2*2); // Multiplication
// console.log(2**3); // Exponentiation (2 raised to the power of 3)
// console.log(2/3); // Division
// console.log(2%3); // Modulus (remainder of division)

let str1 = "hello";
let str2 = " Aboli";

let str3 = str1 + str2; // Concatenates the two strings
// console.log(str3);

// Examples of type coercion in JavaScript:
// console.log("1" + 2); // "12" (string + number results in a string)
// console.log(1 + "2"); // "12" (number + string results in a string)
// console.log("1" + 2 + 2); // "122" (left to right concatenation)
// console.log(1 + 2 + "2"); // "32" (1 + 2 = 3, then 3 + "2" = "32")

// Order of operations and modulus
// console.log((3 + 4) * 5 % 3); // Result is 2

// Unary plus operator converts types
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // Assigns 4 to num1, num2, and num3

let gameCounter = 100;
++gameCounter; // Increments the gameCounter by 1
console.log(gameCounter); // Logs 101

// Comparison operations
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// String and number comparison
// console.log("2" > 1); // true (string "2" is converted to number 2)
// console.log("02" > 1); // true (string "02" is converted to number 2)

// Comparisons involving null and undefined
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true (null is treated as 0 in this comparison)

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// Strict equality comparison (checks type as well)
// console.log("2" === 2); // false (different types)

const name2 = "Aboli";
const repoCount = 50;

// Template literals for string interpolation
console.log(`Hello, my name is ${name2} and my repo count is ${repoCount}`);

const gameName = new String("Aboli-hc-com");

// Accessing string properties and methods
console.log(gameName[0]); // 'A'
console.log(gameName.__proto__); // Logs the prototype of the string object

// String methods
console.log(gameName.length); // 11
console.log(gameName.toUpperCase()); // "ABOLI-HC-COM"
console.log(gameName.charAt(2)); // 'o'
console.log(gameName.indexOf("t")); // 4 (returns the index of the first occurrence of 't')

const newString = gameName.substring(0, 4); // Extracts a substring from index 0 to 4
console.log(newString); // "Abol"

const anotherString = gameName.slice(-8, 4); // Extracts a substring starting from the 8th last character to the 4th index
console.log(anotherString); // "Abol"

const newStringOne = "   Aboli    ";
console.log(newStringOne); // Logs the string with spaces
console.log(newStringOne.trim()); // Removes the leading and trailing spaces

const url =
  "https://www.google.com/search?q=aboli+meaning&sca_esv=3aa485054db5215c&sca_upv=1&sxsrf=ADLYWIKf9IaPkQzAuElEVlI0WpRUTGRaXw%3A1724132222921&ei=fivEZvLxN86gseMP0_-c-Ag&ved=0ahUKEwjyqMWF7YKIAxVOUGwGHdM_B48Q4dUDCA8&uact=5&oq=aboli+meaning&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWFib2xpIG1lYW5pbmcyChAAGIAEGBQYhwIyCxAAGIAEGJECGIoFMgoQABiABBgCGMsBMgoQABiABBgCGMsBMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjGC1D2AVi_CnABeAGQAQCYAccCoAGiDKoBBzAuMi40LjG4AQPIAQD4AQGYAgigAtcMwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIFEC4YgATCAgoQABgWGAoYHhgPmAMAiAYBkAYPugYECAEYCJIHBzEuMi40LjGgB4gz&sclient=gws-wiz-serp";

console.log(url.replace("google", "-")); // Replaces '%20' with '-'

console.log(url.includes("sundar")); // Checks if 'sundar' is in the URL (false)

console.log(gameName.split("-")); // Splits the string into an array based on the delimiter '-'

// Number examples
const scored = 400;
// console.log(scored);

const balance = new Number(100);
console.log(balance);

// String conversion and formatting
console.log(balance.toString().length); // Length of the string representation of the number
console.log(balance.toFixed(1)); // Formats the number with one decimal place
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // Formats the number to 4 significant digits
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // Converts the number to a string with Indian number formatting

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Basic Math methods
console.log(Math.abs(-4)); // 4 (absolute value)
console.log(Math.round(4.6)); // 5 (rounds to nearest integer)
console.log(Math.ceil(4.2)); // 5 (rounds up)
console.log(Math.floor(4.9)); // 4 (rounds down)
console.log(Math.min(4, 3, 6, 8)); // 3 (minimum value)
console.log(Math.max(4, 3, 6, 8)); // 8 (maximum value)
console.log(Math.random()); // Generates a random number between 0 and 1
console.log(Math.random() * 10 + 1); // Generates a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Generates a random integer between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generates a random integer between 10 and 20
