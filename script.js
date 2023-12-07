
const friends = ["Micheal", "Steven", "Peter"]; //Array Literal

console.log(friends[0]); //Displays Micheal.
console.log(friends); //Displays all friends

console.log(friends.length); //displays the length of the properties -> 3
console.log(friends[friends.length - 1]); //displays Peter

friends[2] = 'Jay'; //replaces the Peter in the array or mutating the array adding Jay. 
console.log(friends); //arrays can be changed even tho its declared with const. Entire array however cannot be changed

const firstName = "Darrick"
const fullInfo = [firstName, 'Robarge', 2023 - 1991, 'Developer in Training'];

console.log(fullInfo);

calcAge = (birthYear) => {
    return 2023 - birthYear + " years old";
}

const years = [1990, 1967, 2002, 2010, 2018];


console.log(calcAge(years[0])); //displays 33 years old
console.log(calcAge(years[years.length - 1])); //displays 5 years old

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);