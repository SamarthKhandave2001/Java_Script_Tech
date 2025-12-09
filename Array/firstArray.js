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

//Array Travesrsal
let colors = ["Red","Green","Blue","Yellow"];
for(let item of colors){
console.log(item);
}
