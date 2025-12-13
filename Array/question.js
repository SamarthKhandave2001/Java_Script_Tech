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