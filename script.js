"use strict"

/* JavaScript fundamentals Arrays */

const friends = ["Micheal", "Steven", "Peter"];

console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);

console.log(friends.length - 1);

const calcAge = function (years) {
      return 2024 - years;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);