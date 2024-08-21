// Exercise 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((number) => {
  return number * 2
})

console.log(nums2)

// Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

// const [toppingOne, toppingTwo] = pizzaToppings

// console.log(toppingOne)
// console.log(toppingTwo)

// Exercise 3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Your code here

// const { make, model } = car

// console.log(make)
// console.log(model)

// Exercise 4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings]

console.log(controversialPizzaToppings)

// Exercise 5

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = {...car}

myCar.model = 'q7'

console.log(car)
console.log(myCar)

// Exercise 6

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = 'age'

const userProfile = {
  [propertyName]: 27,
};

console.log(userProfile)

// Exercise 7

// Exercise 8

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function combineTwo(noun = 'cat', adjective = 'white') {
  return `The ${noun} is ${adjective}.`
}

console.log(combineTwo())
console.log(combineTwo('dog', 'blue'))

// Exercise 9

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here

const pizzaTasty = true
let pizza = pizzaTasty ? 'yum' : 'yuck'

console.log(pizza)

// Exercise 10

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

var LANG = localLangConfig || 'en'

// Log the result
console.log('Language setting:', LANG)

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

var USER_THEME = userSavedTheme || 'light'

// Log the result
console.log('User theme setting:', USER_THEME);
