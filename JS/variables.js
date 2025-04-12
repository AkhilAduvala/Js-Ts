/* 
    A variable is a container for storing data in memory. 
    In JavaScript, we use let, const, and var to declare variables.

    var	has Function Scope, can be reassignable and hoisted(with undefined). Avoid using it (outdated)
    let	Block Scope, can be reassignable but not hoisted. Use When value changes over time
    const	Block Scope, can't be reassignable or hoisted. Use When value should never change

*/

let name = "Akhil";
console.log(name);
name = "Akhil Aduvala" //reassignable
console.log("after reassiging : " + name);

{
    let letScope = "block"; //has blocklevel scope, can't be used outside
    console.log("inside bloack : "+ letScope);
}

    let letScope = "outside";
    console.log("outside bloack : "+ letScope);

const pie = 3.147;
console.log("pie value : " + pie);
//pie = 123; as pie is const

console.log("before assign, just hoist : " + city); //will display as null but not error even though city is created post this line, var will be hoisted on top
var city;

city = "Warangal"
console.log("native : " + city);
city = "Hyderabad"; //reassignable
console.log("Work Loaction : " + city);

/*
    The typeof operator tells you the type of a variable.
*/

let x = 5;
console.log("x is of type : " + typeof(x)); //number

const lastName = "Aduvala"
console.log("lastName is of type : " + typeof(lastName)); //String

let isActive = true;
console.log(typeof isActive); // "boolean"

let notDefined;
console.log(typeof notDefined); // "undefined"

let user = null;
console.log(typeof user); // "object"  ❌ (historical JS mistake)

let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"

