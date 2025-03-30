/**
 * Functions help in:
 * 
 * Code Reusability – Write once, use multiple times.
 * Code Organization – Break complex logic into manageable parts.
 * Better Readability & Maintainability – Makes debugging easier.
 * Encapsulation – Hides implementation details.
 * 
 * When you need a named reusable function.
 * When this binding is required.
 * 
 * 
 * Arrow Functions (ES6+):
 * 
 * When writing shorter functions.
 * When this should be inherited from the surrounding scope.
 * When using callbacks (e.g., map(), filter(), event listeners).
 * 
 * can have one, multiple or no parameters
 * With Multiple Statements (Requires {} and return)
 * can't use this in an Arrow Function (Loses this Context)
 * can't use arguments in an Arrow Function (Not Available), use rest parameters
 * 
 * Best Practices
 * 
 * Use const for function expressions to prevent accidental reassignment
 * Use arrow functions for callbacks
 * Use regular functions for object methods
 * Use default parameters to avoid undefined values
 */

//function declaration

function sample(name){
    console.log("Inside the function called by : " + name);
}

sample("Akhil");

//function declarations are hoisted on the top

console.log(greet("AkHi"));

function greet(name){
    return "Hello, " + name + " !";
}

//function expression are not hoisted
//console.log(check(123));

//function expression
const check = function(bill){
    return "Here is ur bill : " + bill; 
}

console.log(check(1234));

const sum = (a,b) => a+b;
const square = (a) => a*a;
const bye = () => "meet you some time soon!"
const practice = (name, previous, today) => {
    if(today > previous){
        return "Thats good, keep going!"
    }else{
        return "come on we can do it!"
    }
} 

console.log(sum(1,2));
console.log(square(5));
console.log(bye());
console.log(practice("Akhil", 2,3));
