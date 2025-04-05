/**
 * Resuablitiy, as classes can create reusable blueprints for objects
 * Mantainability, helps in managing large scale applications
 * OOP, supports inheritance, polymorphism & abstraction
 * 
 * classes define properties and methods that all the objects created from it will have
 * uses constructor to initialize properties
 */

//PascalCase for class names
class Car{
    //we can have static variables that belongs to the class itself
    static kms = 24578;
    //special method in the class that initializes object properties
    //runs automatically when a new object is created
    constructor(brand, model, year){
        //this to refer to the objects own properties inside methods else will use global scope
        //works differently in regular and arrow functions
        //in arrow functions it refer to parent scope
        this.brand = brand;
        this.model = model;
        this.year = year;
        //year = year (won't assign values properly)
    }

    //functions inside a class
    //operate on the objects properties
    start(){
        console.log(`${this.brand} ${this.model}`, "has started!");
    }

    //static methods belong to class and not the instance
    //called using ClassName.staticMethod() and not obj.StaticMethod()
    static run(){
        console.log("Car is running", `${this.kms}`);
    }
}

//creating objects of class Car using new
const car1 = new Car("Toyota", "Yaris", 2019);
car1.start();
const car2 = new Car("Honda", "City", 2025)
car2.start();
Car.run();