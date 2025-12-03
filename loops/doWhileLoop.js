let i = 1;
do{
    console.log(i);
    i++;                    
}
while(i <= 10);


//new practice
// example : validating  user input with a do while loop (user need to write a valid number )

let userInput;
let positiveNumber;

do {
    userInput = prompt('Enter any positive number:');
    positiveNumber = Number(userInput);
} while (isNaN('positiveNumber') || positiveNumber < 0);
console.log('You enter a valid positive Number: ' + positiveNumber);