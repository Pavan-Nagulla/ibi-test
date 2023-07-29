//Explain the output of the above-given code and explain why?

for (var i = 0; i < 5; i++) {

  setTimeout(() => console.log(i), 100)

}

//output:
//5
//5
//5
//5
//5

/*  

Explanation:

This behavior is due to the asynchronous nature of the setTimeout function. When the loop runs, it schedules five timeouts almost simultaneously, each set to execute after 100 milliseconds. The setTimeout function does not block the loop; instead, it returns immediately, allowing the loop to continue its iterations.

By the time the first console.log(i) executes, the value of i has already been incremented to 5, as the loop runs from 0 to 4. The loop doesn't wait for the setTimeout to finish; it completes all its iterations rapidly.

After 100 milliseconds have passed, the callback function inside the setTimeout is triggered for each of the scheduled timeouts. However, since i has already reached 5 after the loop finished, all five callbacks log the value of i, which is now 5.


*/