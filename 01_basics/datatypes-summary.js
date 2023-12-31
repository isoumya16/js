// Primitive

// 7  types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId); // return values will not be same however input values are same

// const bigNumber = 3456543576654356754n

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "soumya",
    age : 24
}

const myFunction = function(){
console.log("Hello World!");
}

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof myFunction);

// console.log(typeof heros);

// Reference (Non-Primitive)

// Array, Objects, Functions 

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "soumyamajumderdotcom"

let anothername = myYoutubename
anothername = "myengineering"

// console.log(myYoutubename)

// console.log(anothername)

let userOne = {
    email: "user@gmail.com",
    upi: "user@bl"
}
let userTwo = userOne

userTwo.email = "soumya@gmail.com"
userTwo.upi = "soumya@bl"

console.log(userOne.email);
console.log(userTwo.email);

console.log(userOne.upi);
console.log(userTwo.upi);

