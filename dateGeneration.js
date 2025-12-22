// Generate the current date and time
const currentDate = new Date();

// Display the full date and time
console.log("Current Date and Time:", currentDate);

// Display only the date in YYYY-MM-DD format
const formattedDate = currentDate.toISOString().split('T')[0];
console.log("Formatted Date:", formattedDate);

// Example: Extract individual parts
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1); // Months are 0-indexed
console.log("Day:", currentDate.getDate());   //current date

let str = "madam";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}

console.log(str === rev);

