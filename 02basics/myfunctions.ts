// ^ Function + types : in the function we can define the type of the argument and the return type of the function

function addTwo(num: number): number {
  return num + 2;
  //return "hello"
}
let myValue = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("hitesh");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("hitesh", "hitesh@lco.dev", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("h", "h@h.com");

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
