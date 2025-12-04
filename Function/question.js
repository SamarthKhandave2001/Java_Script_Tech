//string interpolation : Template strings  support string interpolation, allowing ypu to embed expression directly within the stirng, Interpolated expression are inclosed in $()


let age =29;
let message =`My age is ${age} years`;  // this is known as string interpolation
console.log(message);

//write function sum of two numbers


function sum(a,b){
    return  a + b;
}
console.log(sum(5,15));