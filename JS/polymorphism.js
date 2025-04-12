/**
 * Polymorphism means “many forms”. In JavaScript, it allows you to use the same function/method name to perform
 * different tasks depending on the object.
 *
 * It lets you write more flexible and reusable code
 * Helps in abstracting implementation details
 * Great for extensibility and testing
 * Encourages clean interface design in large apps
 */

//Polymorphism using Class Inheritance (Overriding)
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Dog(), new Cat()];
//Same method (speak) behaves differently depending on the object type.
animals.forEach((a) => a.speak());

//Duck Typing in JavaScript
function makeItSpeak(animal) {
    if (typeof animal.speak === "function") {
        animal.speak();
    } else {
        console.log("This one can't speak");
    }
}

const bird = { speak: () => console.log("Tweet tweet") };
const fish = {};

//You don’t care what the object is, only that it has a speak() method.
makeItSpeak(bird); // ✅
makeItSpeak(fish); // ❌ This one can't speak

//Function Polymorphism with Dynamic Input
function logData(data) {
    if (typeof data === "string") {
        console.log(`String: ${data}`);
    } else if (Array.isArray(data)) {
        console.log(`Array: ${data.join(", ")}`);
    } else {
        console.log(`Other:`, data);
    }
}

//Same function handles different types in different ways.
logData("Hello");
logData([1, 2, 3]);
logData({ key: "value" });
