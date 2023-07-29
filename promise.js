//definition
/*

Promise chaining is a technique used in JavaScript to handle asynchronous operations using Promises in a sequential and readable manner. It allows you to chain multiple asynchronous operations together, where the output of one Promise becomes the input to the next, thus avoiding the "callback hell" problem associated with nested callbacks.

In promise chaining, each operation returns a Promise, and you can use the .then() method to attach a callback that will be executed when the Promise resolves successfully. Additionally, you can chain the .then() method multiple times to perform a sequence of asynchronous tasks.


*/


//code 

// Function that returns a Promise
function makeCoffee() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccessful = true; // Simulating a successful coffee-making process
  
        if (isSuccessful) {
          resolve("Here's your delicious coffee!");
        } else {
          reject("Sorry, we couldn't make your coffee.");
        }
      }, 2000); // Simulating the time taken to make coffee (2 seconds)
    });
  }
  
  // Using the Promise
  console.log("Making coffee...");
  makeCoffee()
    .then((coffee) => {
      console.log(coffee);
    })
    .catch((error) => {
      console.error(error);
    });

    
//explanation 

/*

In this example, we have a function makeCoffee() that returns a Promise. Inside the Promise constructor, we have a simulated delay of 2 seconds (using setTimeout) to mimic the time taken to make coffee. We've set a isSuccessful variable to true, indicating that the coffee-making process is successful.

If the coffee-making process is successful, the Promise resolves with the message "Here's your delicious coffee!" using resolve(). Otherwise, it rejects with the message "Sorry, we couldn't make your coffee." using reject().

In the then() method, we handle the resolved value of the Promise, which is the message returned by resolve(). We log the message to the console, indicating that the coffee is ready.

In the catch() method, we handle any errors that occur during the Promise's execution. If the Promise rejects (due to an error or reject() call), we log the error message to the console.

*/


//output 

//Making coffee...
//Here's your delicious coffee!
