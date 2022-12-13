let greetings: string = "Hello Hitesh";

// now if i put greetings = 33 i will be facing errors
// this is what typescript is mostly all about

//^ you just call the int and float as `numbers` you dont need to define them separetely

greetings.toLowerCase();
console.log(greetings);

// number

let userId = 334455.3;

userId.toFixed();
// userId = "hitesh"
// boolean
let isLoggedIn: boolean = false;

// any

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
