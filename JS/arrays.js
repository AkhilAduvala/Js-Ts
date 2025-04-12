/**
 * Arrays:
 * 
 * Efficiently store multiple values under one variable.
 * Allows iteration and manipulation of data.
 * Supports various built-in methods for operations like filtering, mapping, and reducing.
 * Essential for handling lists of data in Angular apps.
 */

const arr1 = [1,2,3,4,5];
const arr2 = new Array(5); //creates a empty array of size 5 but not recommended
const arr3 = [1,"AkHi",2,"Ash", {Akhil : "Ash"}]; //we can store different types in one array
const age = [22,41,26,50,36];

arr1.push(6); //appends at the end
arr1.unshift(0); //appends at the beginning

console.log(arr1);
console.log(arr2);
console.log(arr3);
arr1.splice(3,0,"Three");//array.splice(index, deleteCount, newElement1, newElement2, ...) insert elements at index by performing delete as mentioned
arr1.splice(4,1);//array.splice(index, deleteCount) deletes the number of elements from index
console.log(arr1);

arr1.pop(); //removes the element at the end
arr1.shift(); //remove element at the start
console.log(arr1);
arr1.splice(1,2);
console.log(arr1);

const color = ["Orange", "Blue", "Black", "White", "Orange"];

// forEach(), Best for executing a function for each element.
color.forEach(c => console.log(c));

// More readable than forEach().
for(const c of color){
    console.log(c);
}
//indexOf is only for arrays and can't use fror objects
console.log(color.indexOf("Orange")); //return the index of the first occurence
console.log(color.indexOf("Red")); //return -1 if not found
console.log(color.includes("Blue")); //returns true if contains
console.log(color.includes("Yellow")); //returns fa;se if doesn't contains

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

/**
 * find() – Get First Matching Element
 * Returns the first element that satisfies a condition.
 * Returns undefined if nothing is found.
 */
const user = users.find(user => user.id === 1); //Find First Matching Element (for Objects)
console.log(user);

const favColor = color.find(x => x === "Orange");
console.log(favColor);

/**
 * findIndex() – Get Index of First Matching Element
 * Returns the index of the first matching element.
 * Returns -1 if not found.
 */
const above25 = age.findIndex(x => x > 25);
console.log(above25);

const fav = color.filter(color => color === "Orange"); //Find All Matching Elements (predicate)
console.log(fav);

/**
 * filter() – Extract Specific Elements
 * Creates a new array with elements that match a condition.
 * Used to remove unwanted items from an array.
 */
const ageAbove35 = age.filter(a => a > 35); //predicate
console.log(ageAbove35);

/**
 * map() – Transform Each Element
 * Creates a new array by applying a function to each element.
 * Does not modify the original array.
 */

const numbers = [1,2,3,4,5];
const double = numbers.map(x => x*2); //function
console.log(double);

/**
 * reduce() – Accumulate Values into One
 * Returns a single value by reducing the array.
 * Common for sum, multiplication, merging, or transformations.
 */

const sum = numbers.reduce((a,x) => a+x,0); //(accumulate, element) => accumulate+element, initial value
console.log(sum);

/**
 * some() – Check If Any Element Matches Condition
 * Returns true if at least one element matches the condition.
 */

let has5 = numbers.some(x => x === 5);
console.log(has5);

/**
 * every() – Check If All Elements Match Condition
 * Returns true only if all elements match the condition.
 */

let allEven= numbers.every(x => x%2 === 0);
console.log(allEven);

/**
 * sort() – Sort Array Elements
 * Mutates the original array (be careful!).
 * Defaults to string sorting (numeric sorting needs a compare function).
 */

const salaries = [100000, 25400, 38000, 22014 , 58000, 158960, 223641, 57631]
const asc = salaries.sort((a,b) => a-b);
console.log(asc);
const dsc = salaries.sort((a,b) => b-a);
console.log(dsc);