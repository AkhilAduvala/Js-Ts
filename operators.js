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
let add = x+y;
console.log("Addition : " + add);
console.log("Subtraction : "+ x-y);
console.log("Multiplication : " + x*y);
console.log("Division : " + x/y);
console.log("Remainder : " + x/y);
console.log("Power : " + x ** 2);
console.log("Not addition but string concatenation : " + x + y);
console.log(x + Number("5") + y); //convert string to number before adding to avoid concatenation
