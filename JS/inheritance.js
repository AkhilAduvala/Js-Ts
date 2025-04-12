/**
 * In JavaScript, inheritance is based on prototypes, not classical classes like Java.
 * but with ES6 class syntax, we can implement inheritance in a way that looks class-based.
 * 
 * Use extends for clear class hierarchies.
 * Use super() inside child constructors before using this.
 * Prefer composition (mixins) over multiple inheritance when combining behaviors.
 * Keep inheritance chain shallow (prefer 1-2 levels deep).
 * Don’t overuse inheritance — favor composition if behavior is unrelated.
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

//single inheritance
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

//multilevel inheritance
class ElectricCar extends Car{
    static fuelType = "Electric";

    constructor(brand, model, range){
        super(brand, model);
        this.range = range;
    }

    hasRange(){
        console.log(`${this.brand} ${this.model}`, "has a range of", `${this.range}`, "kms");
    }
}

const car1 = new ElectricCar("BYD", "Seal", 650);
car1.start();
car1.hasRange();
car1.hasTpms();
car1.stop();

//JavaScript does not support multiple inheritance directly
//Mixins (using functions to “mix” multiple behaviors)
const canEat = {
    eat() {
        console.log("Eating..");
    }
};

const canWalk = {
    walk(){
        console.log("Walking..");
    }
};
const canSwim = {
    swim(){
        console.log("Swimming..");
    }
};

// Combine into a class
class Person{}
Object.assign(Person.prototype, canEat, canWalk, canSwim);

const aki = new Person();
aki.eat();
aki.walk();
aki.swim();

//Hierarchical inheritance
//multiple classes(Car, Truck) extends a  parent(Vechile)
class Truck extends Vechile{
    static payload = "10 Ton";
    constructor(brand, model){
        super("Truck");
        this.brand = brand;
        this.model = model;
    }

    load(){
        console.log(`${this.brand} ${this.model}`, "is loaded now");
    }

    unload(){
        console.log(`${this.brand} ${this.model}`, "is unloaded now");
    }
} 

const tipper = new Truck("Tata", "X5");
tipper.load();
tipper.unload();

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        // ❌ Original functionality lost
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    speak(){
        //Use super.methodName() if you want to retain base logic.
        super.speak();
            console.log("Cat Meows");
    }
}

const scobby = new Dog();
scobby.speak();
const mili = new Cat();
mili.speak();