// const friends = ["Micheal", "Steven", "Peter"]; //Array Literal

// console.log(friends[0]); //Displays Micheal.
// console.log(friends); //Displays all friends

// console.log(friends.length); //displays the length of the properties -> 3
// console.log(friends[friends.length - 1]); //displays Peter

// friends[2] = 'Jay'; //replaces the Peter in the array or mutating the array adding Jay. 
// console.log(friends); //arrays can be changed even tho its declared with const. Entire array however cannot be changed

// const firstName = "Darrick"
// const fullInfo = [firstName, 'Robarge', 2023 - 1991, 'Developer in Training'];

// console.log(fullInfo);

// calcAge = (birthYear) => {
//     return 2023 - birthYear + " years old";
// }

// const years = [1990, 1967, 2002, 2010, 2018];


// console.log(calcAge(years[0])); //displays 33 years old
// console.log(calcAge(years[years.length - 1])); //displays 5 years old

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ["Micheal", "Steven", "Peter"];
//Adds elements to an Array
// const newLength = friends.push('Jay'); //adds Jay to the end of the array

// console.log(friends);
// console.log(friends[3]);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

//Remove elements from an array
// friends.pop(); //removes last person
// const popped = friends.pop(); //removes peter
// console.log(friends);

// friends.shift(); //removes the first person aka John.
// console.log(friends);

// console.log(friends.indexOf('Steven')); //dislays index where Steven is located -> 1
// console.log(friends.indexOf('Bob')); //bob isnt in the array so returns -> -1

// console.log(friends.includes('Steven')); //uses strict equality and displays true
// console.log(friends.includes('Bobs')); //returns false bobs not in the array

// if (friends.includes('Steven')) {
//     console.log('You got a friend in Steven');
// }

const bills = [125, 555, 44];

function calcTips(bills) {
    if (bills >= 50 && bills <= 300) {
          return bills * 0.15;
    } else if (bills < 50 || bills > 300) {
          return bills * 0.20;
    }
}

const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
console.log(tips);

// const calcTips = (bills) => {
//     if (bills >= 50 && bills <= 300) {
//         return bills * 0.15;
//     } else {
//         return bills * 0.20;
//     }
// }

const totals = [calcTips(bills[0]) + bills[0], calcTips(bills[1]) + bills[1], calcTips(bills[2]) + bills[2]];

console.log(totals);
console.log(calcTips(bills[0]));