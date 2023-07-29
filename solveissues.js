/*

Check the below given code, if there are any issues, fix them and explain the output

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {

  if (num % 2 === 0) {

    acc.evens.push(num);

  } else {

    acc.odds.push(num);

  }

  return acc;

});



console.log(result);


*/


//explain

/*

The code provided has a small issue. The reduce() method's initial value (acc) is not specified, which means it will take the first element of the array (1) as the initial value for acc. Since no initial value is provided, and the array contains primitive numbers, the accumulator (acc) would be an object with properties odds and evens, and they would be initialized with the value 1 (the first element of the array).

To fix the issue, we should provide an initial value to the reduce() method. The initial value should be an object with properties odds and evens, initialized as empty arrays.


*/

//correct code

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
}, { odds: [], evens: [] }); // Provide an initial value as an object with properties odds and evens

console.log(result);


//output :

/*
{ odds: [1, 3, 5], evens: [2, 4] }

*/


//explanation :


/*
We provide an initial value to reduce() as an object with properties odds and evens, initialized as empty arrays { odds: [], evens: [] }.

The reduce() method iterates over each element of the numbers array.

For each element, the callback function checks if the number is even or odd. If it's even, the number is pushed into the evens array of the accumulator (acc), and if it's odd, the number is pushed into the odds array.

The updated accumulator (acc) is returned in each iteration.

After the reduce() method completes, the result variable holds the final value of the accumulator, which is an object with the odds array containing odd numbers [1, 3, 5] and the evens array containing even numbers [2, 4].

The final object is logged to the console, displaying the output: { odds: [1, 3, 5], evens: [2, 4] }.

*/