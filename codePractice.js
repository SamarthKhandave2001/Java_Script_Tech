
// noraml coding questions
// Write a program to check number is even or odd
var num = "7";
if(num %2 === 0){
    console.log("Num is Even ");
}else{
    console.log("Num is odd");
}

//Write a program to check number is positive , negative or zero
var num=12;
if(num===0){
    console.log("Num is zero");
}else if(num >0){
    console.log("Num is positive");
}else{
    console.log("Num is negative");

}



//calaulate the sum of number from 1 to 10 using lopp 
var sum =0;
for (var num =1; num <=10; num ++){
 var sum = sum + num;
 
}
console.log(sum);

//program to check number is prime or not

var number = 12;
var isPrime = true;
for(var i=2;  i<number; i++){
    if(number % i===0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(number + "Num is Prime");
}else{
    console.log(number +"Num is not Prime");
}

//Generate a time table with the for loop
for(var num =1; num<=10; num ++){

console.log("5 * " + num + " =" + 5 * num);
}