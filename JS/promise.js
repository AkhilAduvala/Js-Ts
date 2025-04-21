/**
 * Promise is a object & has 3 states
 * 
 * @returns Pending – the initial state, not yet fulfilled or rejected.
 * @returns Fulfilled – the operation completed successfully.
 * @returns Rejected – the operation failed.
 */

//take dog for walk, clean kitchen, throw trash using promise

//first will give resolve/result -> Operation completed successfully
//second will give reject/error  -> Operation failed
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

walkDog().then(value => { console.log(value); return cleanKitchen(); })
    .then(value => { console.log(value); return clearTrash(); })
    .then(value => { console.log(value); console.log("Done with all the tasks!")})
    .catch(error => console.error(error)); //all errors handled in the single point .catch