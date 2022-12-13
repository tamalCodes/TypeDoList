//^ Type annotation : we are telling typescript that this variable is of type string
//^ If we try to assign a number to this variable it will give error

let greetings: string = "Hello Hitesh";

// now if i put greetings = 33 i will be facing errors
// this is what typescript is mostly all about

// Typescript also suggests us the methods that we can use on the variable , basd on the type of the variable

greetings.toLowerCase();

// number
// you just call the int and float as `number` you dont need to define them separetely

let userId: number = 334455.3;
userId.toFixed();

//^ Type inference : typescript will automatically infer the type of the variable
//^ So i donot need to say number, string, boolean again and again

let profit = 1000;

// If i try to assign a string to profit it will give error
// ts is smart enough to infer the type of the variable

// boolean
let isLoggedIn: boolean = false;

//^ Type :  any

// if i just declare a variable without any type annotation then it will be of type "any" by default
// any is the most flexible type in typescript

// but it is not recommended to use it. Imagine you are expecting a string, but if the backend develper sends a number, then you will not get any error which is bad.

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
