//Count Vowels in a String

let str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    count++;
  }
}

console.log(count);

//Find Number of Words in a String
let str1 = "I am learning JavaScript";
let count1 = 1;

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === " ") {
    count1++;
  }
}

console.log(count1);

let text5 = "Hello java script";
let result = text5.slice(6);
console.log(result);