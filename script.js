"use strict"

/* JavaScript fundamentals Arrays */

// const friends = ["Micheal", "Steven", "Peter"];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);

// console.log(friends.length - 1);

// const calcAge = function (years) {
//       return 2024 - years;
// }

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ["Micheal", "Steven", "Peter"];
// friends.push("Jay") // adds an item to an array. It essentially pushes the item in the array.

// friends.unshift("John"); //adds elements to the front of the array.
// console.log(friends);

// friends.pop(); //removes the last element in the array
// const popped = friends.pop(); //saves the element that was removed
// console.log(popped); 
// console.log(friends);

// friends.shift(); //removes the first element in the array
// console.log(friends);

// console.log(friends.indexOf("Micheal")); //returns the index of the item in the array.

// console.log(friends.includes("Steven"));
// //returns a boolean value if the item is in the array. Tests with strict equality. Does not do type coercion 

/* Array code challenge UDEMY 

- tip is 15% if the bill is between 50  300 dollars
- 301+ is 20% tip
- Write a calcTip function
- Function checks to see if the tip will be 15% or 20% based on the bill value.
- Use an if-else statement to determine the tip value.
- test function using 100 bill total.
- create an array with values for bills
- create an array for the tips using the calcTips functions.
- create an array for the total values. Add the values from the tip array and values from the bills array
*/

const bills = [125, 555, 44];

function calcTip(bills, tips) {
      if (bills >= 50 && bills <= 300) {
            tips = bills * 0.15;
      } else {
            tips = bills * 0.20;
      }
      return tips
}

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[bills.length - 1]);
let tips = [tip1, tip2, tip3];
let totals = [tip1 + bills[0], tip2 + bills[1], tip3 + bills[bills.length - 1]];
console.log(tips, totals);