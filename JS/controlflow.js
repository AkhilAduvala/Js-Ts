/*
    Control flow determines which parts of code execute based on conditions.
*/

let age = 18;

if (age >= 18) {
    console.log("You are an adult."); 
} else {
    console.log("You are a minor.");
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break; //if break is not used the below case will also execute
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}

let score = 85;
let grade = score >= 50 ? "Pass" : "Fail"; //A ternary operator is a shortcut for simple if-else conditions, use if-else as needed for complex things
console.log(grade); // "Pass"


