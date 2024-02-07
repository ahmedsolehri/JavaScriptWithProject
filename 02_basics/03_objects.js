const mySymbl = Symbol("mysymbol")

const jsUser = {
    name: "Ahmed",
    "full name": "Ahmed Farooq",
    [mySymbl]: "my Symbol",
    age: 20,
    location: "Lahore",
    email: "ahmed@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Sunday"]
}

// console.log(jsUser.name)
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

jsUser.email = "solehri@gmail.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "nasir@gmail.com"
// console.log(jsUser); 


jsUser.greetings = function(){
    console.log("Hello nodeJS developer");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello nodeJS developer ${this.isLoggedIn}`);
}


console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
