// create a empty array

let arr = [];
console.log(arr); // 

// using Array constructor 
let fruits = new Array("Apple","Orange","Mango");
console.log(fruits);

//using array literals 
let newFruits = ["Apple","Orange","Mango"];

//Access elements of an array using index

let firstFruit = ["Apple","Orange","Mango"];
console.log(firstFruit[0]); // Apple

//Modifying Elements: you can modify array elements by assiging new value to specific indices

let modifyFruits = ["Apple","Orange","Mango"];
modifyFruits[1] = "Banana";
console.log(modifyFruits); // ["Apple","Banana","Mango"]


/**
 * Finds the minimum element using the Array.prototype.reduce() method.
 * @param {number[]} array - The array to search.
 * @returns {number} The minimum element in the array.
 */
function findMinWithReduce(array) {
  if (array.length === 0) {
    // reduce without an initial value on an empty array throws an error.
    return Infinity; 
  }

  return array.reduce((min, current) => {
    // Check if the current element is less than the current minimum (min)
    return current < min ? current : min;
  });
}

const numbers = [45, 12, 89, 5, 67, 34];
const minNumber = findMinWithReduce(numbers);

console.log(minNumber); // Output: 5