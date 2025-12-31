//small codes on array operations

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
// write a java script function that calculates the total prie of items in a shopping cart. The function should take an array of item prices as input and retun the total price.

const productPrices = [29.99, 49.99, 19.99, 9.99];
const totalprice = productPrices.reduce((accum,curElem) => {return accum +curElem},0);

console.log(totalprice);


//Count frequency of elements
let arr6 = ['a', 'b', 'a', 'c', 'b'];
let freq = {};

for (let i = 0; i < arr6.length; i++) {
  freq[arr6[i]] = (freq[arr6[i]] || 0) + 1;
}

console.log(freq);

//Count vowels in a string
let str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (
    ch === 'a' || ch === 'e' || ch === 'i' ||
    ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' ||
    ch === 'O' || ch === 'U'
  ) {
    count++;
  }
}

console.log(count); // 3

//Add element at the END (using push())

let arr7 = [1, 2, 3];
arr7.push(4);

console.log(arr7); // [1, 2, 3, 4]

//Remove an element from array (WITHOUT inbuilt)
let arr8 = [1, 2, 3, 4];
let index = 1;

for (let i = index; i < arr8.length - 1; i++) {
  arr8[i] = arr8[i + 1];
}
arr8.length--;

console.log(arr8); // [1,3,4]

//Remove duplicate from array
let arr9 = [1, 2, 2, 3, 3];
let result = [];

for (let i = 0; i < arr9.length; i++) {
  if (!result.includes(arr9[i])) {
    result.push(arr9[i]);
  }
}

console.log(result); // [1,2,3]

let arr10 = [1, 2, 3, 4, 5];
let secondLast = arr10[arr10.length - 2];

console.log(secondLast); // 