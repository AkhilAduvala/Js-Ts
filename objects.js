/**
 * Encapsulation, as we organize related data and obj in structured way
 * Objects store key-value pairs (properties and methods)
 * Methods within objects should be defined using function expressions, not function declarations.
 * Objects are created using object literals or class constructors
 */

//Object literal
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2025,
    start: function(){
        console.log("Car has started!");
    },
    stop: function(){
        console.log("Car has stopped!");
    },
    run: function(){
        console.log("Car is running");
    }
};

console.log(car.brand);
car.start();
car.stop();