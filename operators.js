/*
    Operators are used to perform operations on variables and values in JavaScript.

    Arithmetic :	+, -, *, /, %, **	Basic math operations
    Comparison :	==, !=, ===, !==, <, >, <=, >=	Compares values
    Logical	:       &&, `	
    Assignment : 	=, +=, -=, *=, /=	Assigns values
    Bitwise :   	&, `	, ^, ~, <<, >>`
    Ternary :   	condition ? value1 : value2	Shorter if-else
    Nullish Coalescing :	??	Returns right-hand value if left is null or undefined
*/

let x = 15;
let y = 5;
let age = x+y;
console.log("Addition : " + age);
console.log("Subtraction : "+ x-y);
console.log("Multiplication : " + x*y);
console.log("Division : " + x/y);
console.log("Remainder : " + x/y);
console.log("Power : " + x ** 2);
console.log("Not addition but string concatenation : " + x + y);
console.log(x + Number("5") + y); //convert string to number before adding to avoid concatenation

console.log(x == "15"); //loose check(equals will not check type)
console.log(x === "15"); //strict check(equals will check type)
console.log(x != "15"); //loose check(equals will not check type)
console.log(x !== "15"); //strict check(equals will check type)
console.log(x>y);
console.log(x>=y);
console.log(x<y);
console.log(x<=y);
console.log(0.1 + 0.2 == 0.3); // Output: false (due to precision issue)
console.log((0.1 + 0.2).toFixed(1) == 0.3); // Output: true

let isAdmin = false;
let isUser = true;
console.log(isAdmin && isUser); // Output: false (Incorrect check)
console.log(isAdmin || isUser); // ✅ Output: true (Correct check)
if(!isAdmin){
    console.log("User");
}
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
