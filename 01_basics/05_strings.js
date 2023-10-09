const name = "soumya"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("soumya-sm-com")

// console.log(gameName[0]);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(0));

console.log(gameName.indexOf('o'));

const newString = gameName.substring(2,4)

console.log(newString);

const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newStringOne = "   soumya   "

console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://soumya.com/soumya%20majumder"

console.log(url.replace("%20","-"));

console.log(url.includes('sundar'))

console.log(gameName.split("-"))
