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

//push array()
let fruitsList = ["Apple","Banana"];
console.log(fruitsList.push("Mango")); // returns new length of the array
console.log(fruitsList);

//pop array()
console.log(fruitsList.pop()); // returns new length of the array
console.log(fruitsList); //showing which value is deleted

//unsfit()

console.log(fruitsList.unshift("Strawberry","Mango")); // returns new length of the array
console.log(fruitsList);

//shift()
console.log(fruitsList.shift("Mango")); // returns new length of the array
console.log(fruitsList);

//filters in array
//indexOf()
const animals = ["cat","dog","elephant","tiger","dog"];
console.log(animals.indexOf("dog")); //1st occurrence

//lastIndexOf()
const number = [1,2,3,4,5,3,2,1];
const result = number.indexOf(2);
console.log(result);
const result2 = number.lastIndexOf(2);
console.log(result2);


//includes()
const result3 = number.includes(10);
console.log(result3); 

//Add Dec at the end of an array?

const months = ["Jan","Feb","Mar","Apr"];
months.splice(months.length,0,"Dec");
console.log(months);

//Update march to March(update)?
const indexToUpdate = months.indexOf("Mar");
months.splice(indexToUpdate, 1, "March");
console.log(months);


//find first element in array

const num = [5,12,8,130,44];

const result4 = num.find((curElem) => {
    return curElem > 2;
});
console.log(result4); // 5

//sort numbers
const value = [40,100,1,5,25,10];
value.sort((a, b) => {
if(a > b) return 1;
if(b >a) return -1; 
});
console.log(value); // [1,5,10,25,40,100] 

//Using the map() method, write a function that takes an array of strings and returns a new array where each stirng is capitalized

const words = ["hello","world","javascript","array"];
const result5 = words.map((curElem) => {
    return curElem.toUpperCase();
});
console.log(result5); // ["HELLO","WORLD","JAVASCRIPT","ARRAY"]