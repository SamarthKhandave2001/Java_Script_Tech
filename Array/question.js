//Find Largest Number in an Array
let arr = [10, 5, 20, 8];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

//find smallest array number
let newarr = [10, 5, 20, 8];
let min = newarr[0];

for (let i = 1; i < newarr.length; i++) {
  if (newarr[i] < min) {
    min = newarr[i];
  }
}

console.log(min);

//sum of array elements
let arr1 = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}

console.log(sum); // 10

//check element exist in array
let arr2 = [10, 20, 30];
let target = 20;
let found = false;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === target) {
    found = true;
    break;
  }
}

console.log(found); // true

//chekc odd even number in array
let arr3 = [1, 2, 3, 4, 5];
let even = 0;
let odd = 0;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("Even:", even, "Odd:", odd);

// Find second largest number in an array
let arr4 = [10, 5, 20, 8];
let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > first) {
    second = first;
    first = arr4[i];
  } else if (arr4[i] > second && arr4[i] !== first) {
    second = arr4[i];
  }
}

console.log(second); // 10
