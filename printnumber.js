//Q10. What will the following code's output be in sequence and explain why?

function printNumber(num) {

    console.log(num);
  
  }
  
  
  console.log(1);
  
  
  setTimeout(printNumber, 0, 2);
  
  
  setTimeout(printNumber, 100, 3);
  
  
  console.log(4);
  
/*
output :

1
4
2
3


*/

/*
explanation:

console.log(1);: The number 1 is printed immediately.

setTimeout(printNumber, 0, 2);: This sets a timer to execute the printNumber function with the argument 2 after a delay of 0 milliseconds. Despite the delay being set to 0, the callback function will be added to the task queue after the current synchronous code is executed.

setTimeout(printNumber, 100, 3);: This sets another timer to execute the printNumber function with the argument 3 after a delay of 100 milliseconds. Since this delay is longer than the previous one, the callback function with 3 will be added to the task queue after the one with 2.

console.log(4);: The number 4 is printed immediately after the previous line.

Now, let's understand the event loop's behavior:

The initial synchronous code executes first and logs 1.

Then, the two setTimeout functions are encountered. They schedule the respective callback functions (printNumber) to be executed after the specified delays.

Since the delay for the first setTimeout is set to 0, the callback function with 2 is added to the task queue immediately after the synchronous code finishes executing.

Next, the delay for the second setTimeout is set to 100 milliseconds. Therefore, the callback function with 3 will be added to the task queue after approximately 100 milliseconds from the time the setTimeout is encountered.

The event loop continuously checks for tasks in the task queue and moves them to the call stack when it's empty.

After the initial synchronous code has finished executing, the event loop starts processing the tasks in the task queue. The callback function with 2 is executed first because it was added to the task queue before the one with 3. Therefore, 2 is printed to the console.

Next, the callback function with 3 is executed, and 3 is printed to the console.

So, the final output sequence is 1, 4, 2, 3.

*/