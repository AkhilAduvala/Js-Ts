function mainFunction(callback){
    console.log("Hey this is from the main function");

    callback(); //callback function is called after the main function is done

}

function callback1(){
    console.log("Bye! from callback 1 function");
}

function callback2(){
    console.log("Bye! from callback 2 function");
}

mainFunction(callback1); // here the callback function that we are passing is 1
mainFunction(callback2); // here the callback function that we are passing is 2

function mainFunction(callback) {
    console.log("Hey this is from the main function");
    callback(); // this calls the passed function
}

//callback with anonyomous class
mainFunction(() => {
    console.log("Bye! from arrow callback");
});


setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);  

function loadData(callback) {
    const success = false;
    if (!success) {
        return callback(new Error("Failed to load data"));
    }
    callback(null, "Data loaded");
}

loadData((err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(data);
    }
});

//Write a function calculate(a, b, callback) that performs addition and passes the result to the callback.

function calculate(a, b, callback){
    let result = a + b;
    callback(result);
}

function displayResult(a){
    console.log(`the result for above calculation is :  ${a}`);
}

calculate(5, 15, displayResult);

//Use setTimeout to simulate data fetching and pass the result to a callback.

setTimeout(() => {
    console.log("data loaded successfully")
}, 2000);

//take dog for walk, clean kitchen, throw trash
function walkDog(callback){
    setTimeout(() => {
        console.log("Taking the dog for walk is now completed");
        console.log("Now lets start cleaning the kitchen");
        callback();
    }, 1500);
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("Kitchen is now cleaned");
        console.log("Now lets clear the trash");
        callback();
    }, 2500);
}

function clearTrash(callback){
    setTimeout(() => {
        console.log("Trash is now at the recycle plant");
        callback();
    }, 1500);
}


//callback hell, if we need multple callbacks nested
console.log("Lets start with today's task");
walkDog(() => {
    cleanKitchen(() => {
        clearTrash(() => {
            console.log("Done with all the tasks!")
        })
    })
});