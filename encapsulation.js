/**
 * Encapsulation is the bundling of data (variables) and methods (functions) that operate on that data
 * into a single unit (object/class) and restricting direct access to some of the object's components.
 *
 * You hide the internal implementation and expose only what’s necessary.
 * It helps to protect object state and enforce intended usage.
 *
 * Prevents external code from tampering with internal state.
 * Promotes data integrity and security.
 * Makes code easier to refactor and maintain.
 * Helps create reusable components/services in frameworks like Angular.
 * 
 *  Syntax	      Scope	                        Visibility	              Example Use
 * this.name	  Instance	                        Public	              this.name = "A"
 * #name	      Instance	                        Private	              this.#name = "A"
 * let name	      Local	                          Private (closure)	    Inside a function or block
 * var name	      Local (but function-scoped)	    Private to function	  Less recommended today
 */

//Using private(#) Fields (ES2022+)

class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setname(name) {
    if (name) {
      this.#name = name;
    }
  }
}

const p1 = new Person("Akhil");
console.log(p1.getName());
p1.setname("AkHi");
p1.setname();
console.log(p1.getName());

console.log(p1.name);

//Using Closures for Privacy (Older Method)

function createCounter() {
  let count = 0; // private variable (as the scope of the let is block level)

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // ❌ undefined

//Public vs Private (No real private in pre-ES6)
class Car{
  constructor(name){
    this.brand = name;
  }

  getBrand(){
    return this.brand;
  }

  setBrand(name){
    if(name){
      this.brand = name;
    }
  }
}

const city = new Car("Honda");
console.log(city.getBrand());
//Publicly accessible and changeable
console.log(city.brand); //its still public but we just act that it is private

//we can have private methods same as variables
class Example {
  #privateMethod() {
    console.log("I'm private!");
  }

  callPrivate() {
    this.#privateMethod(); // ✅ can call it internally
  }
}

const ex = new Example();
ex.callPrivate(); // I'm private!
//ex.#privateMethod(); // SyntaxError
