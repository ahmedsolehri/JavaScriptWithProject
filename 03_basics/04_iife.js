// Immediately invoked function expression
// iife ic liey use hota hai tak global scope sy polluttion na plute ho
// global scope sy jo poulltion hoti hai usky iife use hota hai, jo bhi variables etc

( function oneChai(name) {
    console.log(`your name is ${name}`);
})("ahmed");

( (name) => {console.log(`chai ${name}`);})("coffee")