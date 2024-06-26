//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*
Primitive mein copy diya jata hai 
aur changes copy mein hota hai original mein nahi
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// symbol in used for uniqueness of data
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// function ad variable
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// **********

// Stack (Primitive) give varibale copy in return
/* 
    stack mein copy diya jata hai. jo copy mein changes hota hai wo oroginal mein change nahi hota
 */
// Heap (Non-Primitive) give reference, changed in orignl value

let myYoutubename = "Ahmedsolehri"

let anotherName = myYoutubename
anotherName = "coffee"

console.log(myYoutubename)

console.log(anotherName)


let userOne = {
    email: "ahmed@gamil.com",
    id: 200185
}

let userTwo = userOne

userTwo.email = "solehri@outlook.com"

console.log(userOne.email);
console.log(userTwo.email);
