/**
 * async/await is syntactic sugar over Promises.
 * It makes asynchronous code look and behave like synchronous code 
 * — which means it’s easier to read, write, and debug.
 */

/**
 * async function
 * Marks a function as asynchronous — it always returns a Promise.
 */

async function sayHello(){
    return "Hello";
}

sayHello().then(msg => console.log(msg));

/**
 * await keyword
 * Can only be used inside an async function. It pauses the execution until the Promise is resolved.
 */

async function getData() {
    const result = await setTimeout(() => {
        return "Akhil"
    }, 1000);
    const json = await result.json();
    console.log(json);
}  

//take dog for walk, clean kitchen, throw trash using async-await

async function allTasks(){
    try{
        const dog = await walkDog();
        console.log(dog);

        const kitchen = await cleanKitchen();
        console.log(kitchen);

        const trash = await clearTrash();
        console.log(trash);

        console.log("Done with all the tasks!");
    } catch(error) {
        console.error("Something went wrong:", error);
    }
}

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let walkDone = true;
            if(walkDone){
                resolve("You walk the Dog!");
            } else {
                reject("You Didn't walk the Dog!");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            let cleaned = true;
            if(cleaned){
                resolved("You cleaned the kitchen!");
            } else {
                rejected("You are yet to clean the kitchen!");
            }
        }, 2500);
    });
}

function clearTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let cleared = true;
            if(cleared){
                resolve("Trash has been cleared!");
            } else {
                reject("Please clear the trash!");
            }
        }, 1000);
    })
}

allTasks();

//If the tasks are independent — use Promise.all() to run them simultaneously. Saves time!
async function doAllTasksParallel() {
    try {
        const [dog, kitchen, trash] = await Promise.all([
            walkDog(),
            cleanKitchen(),
            clearTrash()
        ]);
        console.log(dog, kitchen, trash);
        console.log("All done in parallel!");
    } catch (e) {
        console.error("Failed:", e);
    }
}  

doAllTasksParallel();