/**
 * In JavaScript, inheritance is based on prototypes, not classical classes like Java.
 * but with ES6 class syntax, we can implement inheritance in a way that looks class-based.
 */

class Vechile{
    constructor(type){
        this.type = type;
    }
    
    start(){
        console.log(`${this.type}`, " has started");
    }

    stop(){
        console.log(`${this.type}`, " has stopped");
    }
}

class Car extends Vechile{
    static tpms = "Yes";
    constructor(brand, model){
        super("Car");
        this.brand = brand;
        this.model = model;
    }

    hasTpms(){
        Car.tpms === "Yes" ? console.log("Yes Car has TPMS") : console.log("No Car doesn't had TMPS");
    }
}

const myCar = new Car("Tata", "Harier");
myCar.start();
myCar.stop();
myCar.hasTpms();