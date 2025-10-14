//1
let user1 = {
  name: "John",
  years: 30,
};
let { name, years: age, isAdmin = false } = user1;

console.log(age, name, isAdmin);

//2
const ourPlanet = "Earth";
var currentVisitor = "Alexey";

//3
//function sayHi() is not defined outside of if statement, so it will cause an error.

//4
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

//5
//No, you cannot change the value of a constant variable. It will cause an error.

//6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};
var sum = 0;
let arrSalaries = Object.values(salaries);
arrSalaries.forEach(function (value) {
  sum += value;
});
console.log("SALARY = " + sum);

//7
/*if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/
let a = 1;
let b = 8;
let result = a + b < 4 ? "Below" : "Over";
console.log("RESULT = " + result);

//8
/*let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/
let login = null;
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log("MESSAGE = " + message);
