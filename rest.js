/**
 * rest operator (...) is used to collect multiple arguments or elements into an array.
 * 
 * Handles unknown/multiple function arguments
 * Creates flexible functions
 * Works with array and object destructuring
 */


console.log(sum(1,2,3,4,5));
function sum(...input){
    return input.reduce((old, current) => old + current, 0);
}

//Collecting Multiple Function Arguments
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 3, 5, 7)); // [6, 10, 14]

//destructing arrays/objects

const [first, second, ...remaining] = [10, 20, 30, 40, 50];

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]

const user = { name: "Alice", age: 25, country: "USA", role: "Developer" };
const { name, ...details } = user;

console.log(name);    // "Alice"
console.log(details); // { age: 25, country: "USA", role: "Developer" }

//Handling Variable Function Parameters
function greet(message, ...names) {
    return names.map(name => `${message}, ${name}!`);
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
