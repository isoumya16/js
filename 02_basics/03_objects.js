// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Soumya",
    "full name": "Soumya Majumder",
    [mySym] : 'mykey1',
    age : 24,
    location : 'Kanchrapara',
    email: 'soumya@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(['full name']);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "soumya@chatgpt.com";

// console.log(JsUser.email);

// Object.freeze(JsUser)


JsUser.email = "soumya@microsoft.com";

// console.log(JsUser);
// console.log(typeof JsUser.mySym);


JsUser.greetings = function(){
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings);
console.log(JsUser.greetings());

console.log(JsUser.greetingsTwo);
console.log(JsUser.greetingsTwo());

