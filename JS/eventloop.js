/**
 * JavaScript is single-threaded, yet it's non-blocking. 
 * The Event Loop is what enables asynchronous behavior while still running on one thread.
 * 
 * How it works (Conceptual flow):
 * 
 * Call Stack → Executes synchronous code (line by line)
 * Web APIs → Handles async tasks like timers, fetch, DOM events
 * Callback Queue → Stores callbacks from async tasks (e.g., setTimeout)
 * Microtask Queue → Stores promise callbacks (.then, async/await)
 * 
 * Event Loop → Event Loop checks if call stack is empty,then moves task from queue to stack.
 * If the call stack is empty, it pushes the first microtask or callback into it and executes.
 * 
 * Prioritizes the microtask queue before callback queue.
 */

console.log("Start");

setTimeout(() => console.log("Timeout!"), 0);

//Even though setTimeout has 0ms, 
// Promises are always run first (they go into Microtask Queue, which is prioritized over Callback Queue).
Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
