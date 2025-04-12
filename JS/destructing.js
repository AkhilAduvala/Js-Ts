/**
 * Destructuring is a feature that allows you to extract values from arrays or objects & 
 * assign them to variables in a more concise and readable way.
 * 
 * Easier to extract values from arrays and objects.
 * Avoid repetitive code when accessing object properties.
 * Makes function parameters more readable.
 * Simplifies swapping values and handling API responses.
 */

const names = ["AkHi", "Ash", "Abhi", "Athidhi"];

//Traditional Way(without destructing)
const mrCaptain = names[0];
const msViceCaptain = names[1];

console.log("Let me introduce the captain of the team \"" + mrCaptain + "\" along with the vice captain \"" + msViceCaptain + "\"");

//using destructing
//as we are using destructing with arrays, the variabes will take elements in the order of their position in array
const[chair, vicechair] = names;

console.log("Let me introduce the chair of the team \"" + chair + "\" along with the vice chair \"" + vicechair + "\"");

//skipping elements
//we can use let as well of the variables, but we prefer const to avoid reassigning
let[,,member1, member2] = names;
console.log("Here are the members of the team \"" + member1 +"\"" + " & \"" + member2 + "\"");

const team = {
    captain : "AkHi",
    viceCaptain : "Ash",
    player1 : "Abhi",
    player2 : "Athidhi"
}

//Traditional Way(without destructing)
const cheifMinister = team.captain;
const homeMinister = team.viceCaptain;
const minister1 = team.player1;
const minister2 = team.player2;

console.log("Please find the details from the cabinet : \"" + cheifMinister + "\"" + "\"" + homeMinister + "\""
    + "\"" + minister1 + "\"" + "\"" + minister2 + "\""
)

//using destructing
//the variables names should match with attribute names of the obj as thats how the mapping is done
let {captain, viceCaptain, player2, player1} = team;

console.log(captain);
console.log(viceCaptain);
console.log(player1);
console.log(player2);

//if we want to use a different name for varaible, then we can use something as below
const{captain : a, viceCaptain : b, player1 : c, player2 : d} = team;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//always have a default value to avoid undefined

const{captain : mr, age : old = 25} = team;
console.log("Here we ge the mr assigned with captain attribute \"" + mr + "\" however as the obj has no attribite age, we use default : " + old);

//with0ut destructing
function greet(user) {
    console.log(`Hello, ${user.name}!`);
}

const user = { name: "AkHi", age: 25 };
greet(user); // Hello, AkHi!

//with destructing
//Instead of passing individual values, we pass the entire user object.
//Destructuring Inside Function Parameters
function greetings({name}) {
    console.log(`Hello, ${name}!`);
}

const person = { name: "Ash", age: 25 };
//{ name } extracts only the name property from the person object.
greet(person); // Hello, Ash!


//swapping withour need of temp variables

let x = 1, y = 2;
console.log("Value of x : " + x);
console.log("Value of y : " + y);
[x,y] = [y,x];
console.log("Value of x after swap : " + x);
console.log("Value of y after swap : " + y);
