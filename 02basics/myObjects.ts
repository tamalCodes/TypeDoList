// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

//^ Here we are defining the type of the object that the function is accepting
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "hitesh", isPaid: false });

//^ Return type of function is an object here with name and price
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

//^ We can create type for the object and use it in the functions as well
//^ In the below function we are able to use the User type to define what the function will be accepting and returning

type User = {
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

function createUser2(user: User): User {
  return { name: "", email: "", isActive: true };
}

// createUser({name: "", email: "", isActive: true})

// let myUser: User = {
//   _id: "1245",
//   name: "h",
//   email: "h@h.com",
//   isActive: false,
// };

// type cardNumber = {
//   cardnumber: string;
// };

// type cardDate = {
//   cardDate: string;
// };

// type cardDetails = cardNumber &
//   cardDate & {
//     cvv: number;
//   };

// myUser.email = "h@gmail.com";
// myUser._id = "asa"

export {};
