// when we consider current context use This keyword
const user = {
    username: "hitesh",
    price: 666,

    welcomeMessage: function(){
        console.log(`${this.username}`);
    }
}

// browser ky andar window global object hai
user.welcomeMessage()