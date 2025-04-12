/**
 * “Tell me what to do, not how it’s done.”
 * Abstraction is about hiding internal details and showing only the essential features of an object or functionality.
 *
 *
 */

//Abstraction via Functions / Modules

function loginUser(username, password) {
    // internal complexity hidden
    console.log("Checking credentials...");
    // backend call, token store, etc.
    return "Logged in!";
}

// Usage you expose a simple function that hides underlying logic.
console.log(loginUser("admin", "pass"));

//Abstraction Using Classes & Methods

class Car {
    startEngine() {
        console.log("Engine started");
    }

    drive() {
        this.startEngine();
        console.log("Driving...");
    }
}

// Usage
const myCar = new Car();
//drive() abstracts the internal steps like startEngine().
myCar.drive(); // You don't care HOW engine starts internally

//Abstraction Using Factory Functions
function createUser(name) {
    return {
        getName: () => name,
        sayHello: () => `Hello, ${name}`,
    };
}

const user = createUser("Alice");
//Internal state is hidden — only safe APIs are exposed.
console.log(user.sayHello()); // Hello, Alice
console.log(user.name); // ❌ undefined (name is private)

