/**
 * The spread operator (...) is used to expand an array, object, or iterable into individual elements.
 * 
 * Copying arrays/objects without modifying the original
 * Merging arrays/objects easily
 * Passing multiple arguments to functions from an array
 * Avoiding push() and concat() in arrays
 * 
 * Works with arrays and objects.
 * const newArray = [...oldArray];
 * const newObject = { ...oldObject };
 * It does not modify the original array/object (immutable approach).
 * 
 * Copying Arrays	const newArr = [...oldArr]
 * Copying Objects	const newObj = { ...oldObj }
 * Merging Arrays	const merged = [...arr1, ...arr2]
 * Merging Objects	const merged = { ...obj1, ...obj2 }
 * Passing Arguments	func(...argsArray)
 */

const number = [1,2,3,4];
console.log(number); //[ 1, 2, 3, 4 ]
console.log(...number); //1 2 3 4 Instead of logging the entire array, ...numbers spreads its elements.

const user = {
    name : "AkHi",
    id : 1
}
console.log(user)
//Copying (Avoids Reference Issues)
const user1 = {...user};
//will only update value in user1, as it is a copy & not same reference
user1.name = "Ash";
console.log(user1);

const even = [0,2,4,6,8];
const odd = [1,3,5,7,9];
//merging (Alternative to concat() but cleaner)
const whole = [...even, ...odd];
console.log(...whole);

const obj1 = { name: "Alice", age: 25 };
const obj2 = { country: "USA", gender: "Female" };
// (mergingAlternative to Object.assign() but more readable)
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

//Spread only creates a shallow copy, not a deep copy.
//Solution: Use structuredClone() (modern) or JSON.parse(JSON.stringify(obj)) for deep copies.
const object1 = { name: "Alice", address: { city: "NYC" } };
const object2 = { ...obj1 };

obj2.address.city = "LA";
console.log(obj1.address.city); // "LA" 😨 (unexpected change!)

