function sayMyName(){
    console.log("Functions");
}

//sayMyName // this is reference 
//() // if we execute the func then use paranthees

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const finalResult = addTwoNumbers (2,8)
// console.log(finalResult);


// ...num1 rest operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,200));


const user = {
    userName: "hitesh",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// console.log(handleObject(user));


const myNewArray = [1,2,3]

function returnArrayValue(getArray){
    return getArray[2]
}

console.log(returnArrayValue(myNewArray));