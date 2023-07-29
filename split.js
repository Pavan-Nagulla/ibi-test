/*

What will the code below output to the console and why?

*/

var arr1 = "john".split(''); 

var arr2 = arr1.reverse();

var arr3 = "jones".split('');

arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


/*
output :

array 1: length=5 last=j,o,n,e,s
array 2: length=5 last=j,o,n,e,s

*/

/*
Explanation of each step:

var arr1 = "john".split('');: The string "john" is converted to an array of characters ['j', 'o', 'h', 'n'] using the split() method.

var arr2 = arr1.reverse();: The reverse() method is called on arr1, which reverses the order of its elements in place. Now, arr1 and arr2 both reference the same reversed array: ['n', 'h', 'o', 'j']. Note that reverse() mutates the original array and also returns a reference to the modified array, which is why arr2 gets assigned the reversed array.

var arr3 = "jones".split('');: The string "jones" is converted to an array of characters ['j', 'o', 'n', 'e', 's'] using the split() method.

arr2.push(arr3);: The array arr3 is pushed as a single element to the end of arr2. After this operation, arr2 becomes ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]. The array arr3 is nested within arr2.

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));: This logs the length of arr1, which is 5, and the last element of arr1 using the slice() method. arr1.slice(-1) returns the last element of arr1, which is 's'. So, the output is "array 1: length=5 last=s".

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));: This logs the length of arr2, which is also 5, and the last element of arr2 using the slice() method. arr2.slice(-1) returns the last element of arr2, which is the nested array ['j', 'o', 'n', 'e', 's']. So, the output is "array 2: length=5 last=j,o,n,e,s". Note that the nested array is displayed as a comma-separated string.


*/