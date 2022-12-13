"use strict";
// ^ Function + types : in the function we can define the type of the argument and the return type of the function
exports.__esModule = true;


function addTwo(num) {
    return num + 2;
    //return "hello"
}
var myValue = addTwo(5);


function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hitesh");


function signUpUser(name, email, isPaid) { }
signUpUser("hitesh", "hitesh@lco.dev", false);

var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");


// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
