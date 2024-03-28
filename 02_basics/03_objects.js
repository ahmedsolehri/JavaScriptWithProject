// singeton ==> construdtor sy agar bany ga to singleton hoga


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
    // console.log("Hello nodeJS developer");
}

jsUser.greetingsTwo = function(){
    // console.log(`Hello nodeJS developer ${this.isLoggedIn}`);
}


// console.log(jsUser.greetings());
// console.log(jsUser.greetingsTwo());



// my code for practice

// Object.create ==> constructor method ==>> singleton

const mySymbol = Symbol("key1") 

const User1 = {
    name: "Hitesh",
    country: "Pakistan",
    //how symbbol define in objects
    [mySymbol]: "key1",
    isLogged: false,
    lastLogged: ["monday", "Sunday"]
}

// console.log(User1.name)
// console.log(User1.country)
// console.log(User1['name'])
// console.log(User1[mySymbol])
// console.log(User1)

