//function declartion and arguments
function sam(name){
    console.log("Welcome to js coding " + name);
}

sam("Rushikesh");
sam("Ajay");

// write a function to find the sum of two numbers with parameter 

function sum(a,b){
    console.log(a +b);

}
sum(500, 200);


//immediate function invocation → immediately invoked function or IIFE
(function(){
    console.log("This is an imddiate function invocation");
})();

(function (a, b){
    console.log(a + b);
})(20,30);