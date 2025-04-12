/**
 * Loops allow us to execute a block of code multiple times, making it easier to work with large datasets, perform repetitive operations, and iterate over arrays or objects.
 * for() : When the number of iterations is known.
 * while() : When the number of iterations is unknown and depends on a condition.
 * forEach() : When iterating over an array and modifying elements without needing an index.
 * map() : When transforming data and returning a new array.
 */

for(let i = 0; i < 5; i++){
    console.log(i);
}

let x = 5;
while(x >= 0){

    console.log(x);
    x--;
}

let numbers = [1,2,3,4,5];
// Trying to break out of forEach() (Doesn't support break), use for
// Modifying an array inside forEach() (Doesn't return a new array), use map
numbers.forEach(n => console.log(n));

let squares = numbers.map(n => n*n);
console.log("Squares : " + squares);

