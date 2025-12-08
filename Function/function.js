//3 student at a same time wnats to find  the sum of two numbers

// var a = 5, b = 10;
// var total = a + b;
// console.log(total);

function add(a, b) {
    return a + b;
}
console.log(add(5, 10))

function greet(){
    console.log("Welome to js coding")
}
greet()

//write function to find sum of two numbers
function sum(){
    var a = 15, b = 25;
    var total = a + b;
    console.log(total);
}
sum();

//create a calculator
function calculator(num1, num2, operator){
    switch(operator){
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "*":
        return num1 * num2;

        case "/":
            if(num2 === 0){
                return"0 is not allowed";
            }
            else{
                result = num1 / num2;
                return result;
            }
    default:
        return "no operator found";
    }                                 
}
console.log(calculator(20, 10, "+"));
console.log(calculator(20, 10, "-"));


//Another approch uisng arrow function
const newCalculator =(num1, num2, operator) =>{
    switch(operator){
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "*":
        return num1 * num2;

        case "/":
            if(num2 === 0){
                return"0 is not allowed";
            }
            else{
                result = num1 / num2;
                return result;
            }
    default:
        return "no operator found";
    }                                 
}
console.log(calculator(20, 10, "+"));
console.log(calculator(20, 10, "-"));


//write a function using reverse string

const isReverse = (str)  => {
for(let char =str.length - 1;  char>= 0; char--){
    console.log(str[char]);
}
};
isReverse("Sam");