// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
// console.log(myHeros[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(2));

// console.log(myArr);

// const newArr = myArr.join()

// console.log(typeof newArr);

// slice. splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)  //slice doesn't manipulate original array

console.log("B",myArr); 
console.log(myn1);

const myn2 = myArr.splice(1,3) //splice manipulates original array

console.log("C",myArr); 
console.log(myn2);

