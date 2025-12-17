//small strign exmaple
const str = "Hello Welcome to JavaScript";
console.log(str.length); //length of string
// length always start with 1

//another example
let text = "My name is 'Sam' & I am a \"Full-Stack\" Developer";
console.log(text);

//Index Of()
let newText="Hello World";
console.log(newText.indexOf("o"));//4

let strArr = Array.from(newText);
// console.log(strArr);

let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);
//match()

let text2 = "Welcome to java script";
let result = text2.match("java script");
console.log(result);