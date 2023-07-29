/*


Use Array.reduce() method to reverse the following given array

const arr = [1, 2, 3, 4, 5]


*/

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((reversed, current) => {
  // Add the current element to the beginning of the new array
  reversed.unshift(current);
  return reversed;
}, []);

console.log(reversedArr); 

// Output: [5, 4, 3, 2, 1]
