# string-library
[School Assignment] JS Library for manipulating strings

[![npm version](https://img.shields.io/npm/v/@euripidean/string-library.svg)](https://www.npmjs.com/package/@euripidean/string-library)

[![npm downloads](https://img.shields.io/npm/dt/@euripidean/string-library.svg)](https://www.npmjs.com/package/@euripidean/string-library)

[NPM Package](https://www.npmjs.com/package/@euripidean/string-library)

# What it does
This simple package provides a number of functions that can help you to manipulate strings in your projects, all taking a string as a parameter:

- **capitalize(str)**
- **allCaps(str)**
- **capitalizeWords(str)**
- **capitalizeHeadline(str)** (does not capitalize the following words: 
- **removeExtraSpaces(str)**
- **kebobCase(str)**
- **snakeCase(str)**
- **camelCase(str)**
- **shift(str)** (accepts a number as a parameter to shift multiple characters to the end of the string)
- **makeHashtag(str)** (will return the three longest words in the string, capitalized and hashtagged)
- **isEmpty(str)**

## Installation
```shell
npm install @euripidean/string-library
```

## Usage
```javascript
const stringLibrary = require('@euripidean/string-library');
```
### capitalize
```javascript
const capitalized = stringLibrary.capitalize("hello world");
console.log(capitalized); // Output: "Hello world"
```
### allCaps
```javascript
const uppercase = stringLibrary.allCaps("hello world");
console.log(uppercase); // Output: "HELLO WORLD"
```
### capitalizeWords
```javascript
const wordsCapitalized = stringLibrary.capitalizeWords("hello world");
console.log(wordsCapitalized); // Output: "Hello World"
```
### capitalizeHeadline
```javascript
const headlineCapitalized = stringLibrary.capitalizeHeadline("a tale of two cities");
console.log(headlineCapitalized); // Output: "A Tale of Two Cities"
```

### removeExtraSpaces
```javascript
const trimmedString = stringLibrary.removeExtraSpaces("   Hello   world!   ");
console.log(trimmedString); // Output: "Hello world!"
```
### kebobCase
```javascript
const kebabCased = stringLibrary.kebobCase("Hello World");
console.log(kebabCased); // Output: "hello-world"
```
### snakeCase
```javascript
const snakeCased = stringLibrary.snakeCase("Hello World");
console.log(snakeCased); // Output: "hello_world"
```
### camelCase
```javascript
const camelCased = stringLibrary.camelCase("Hello World");
console.log(camelCased); // Output: "helloWorld"
```
### shift
```javascript
const shiftedString = stringLibrary.shift("Hello", 2);
console.log(shiftedString); // Output: "lloHe"
```
### makeHashtag
```javascript
const hashtags = stringLibrary.makeHashTag("This is a sample string");
console.log(hashtags); // Output: ["#Sample", "#String", "#This"]
```
### isEmpty
```javascript
const emptyCheck = stringLibrary.isEmpty("   ");
console.log(emptyCheck); // Output: true
```
```javascript
const emptyCheck = stringLibrary.isEmpty("Oh hey");
console.log(emptyCheck); // Output: false
```



