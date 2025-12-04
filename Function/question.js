//string interpolation : Template strings  support string interpolation, allowing you to embed expression directly within the stirng, Interpolated expression are inclosed in $()


let age =29;
let message =`My age is ${age} years`;  // this is known as string interpolation
console.log(message);

//write function sum of two numbers


function sum(a,b){
    return  a + b;
}
console.log(sum(5,15));



// create a calculator 

function calculator(num1, num2, operator) {
    let result ;
   switch(operator){
    case "+":
        num1 + num2;
        return num1 + num2;
    
        case "-":
        num1 - num2;
        result = num1 - num2;
           return result;
            
            default: return 'no operator found';
   }
}

console.log(calculator(10,5,"+"));

//Map Function 
//Function expressions are convenient when passing a function as an argument to another function. The following example defines a map function that should receive a function as first argument and an array as second argument. Then, it is called with a function defined by a function expression:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]