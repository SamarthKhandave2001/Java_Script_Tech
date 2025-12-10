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
for(let item of colors){  // for..of loop
console.log(item);
}

//another method
let newColors = ["White","Purple","Blue","Yellow"];
for(let item =0; item< newColors.length; item++){
console.log(newColors[item]);
}

//for in loop  in means index  for in give you index
let vehicles = ["Car","Bike","Bus","Truck"];
for(let index in vehicles){
    console.log(index); 
}

//for Each
// The arr.forEach() method calls the provide function once for each element of the array. The provided function may perofrm any kind of operation on the elements of the given array.

fruits.forEach((cueElem,index, arr) => {
    console.log(`${cueElem} ${index}` );
});

//Map function
//map() creates a new array from calling a function for every array element. map() does not change the original array.
const myMapArr = fruits.map((cueElem, index, arr) => {
    return `My fav fruti is ${cueElem}`;
});
console.log(myMapArr);
console.log(fruits); 

//write a program to multiply each element with 2
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((curElem) => {
    console.log(curElem * 2);
});
// another method using map
const doubleValue = numbers.map((curElem) => {
   return curElem * 2;

   //creates a new array with transformed elements
});
console.log(doubleValue);   