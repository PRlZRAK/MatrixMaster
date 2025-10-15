//1
/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}*/
let checkAge = (age) =>
  age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
console.log(checkAge(17));

//2
function pow(x, n) {
  return x >= 1 && Math.floor(x) == x && n >= 1 && Math.floor(n) == n
    ? Math.pow(x, n)
    : "function supports only the natural values";
}
console.log(pow(-1, 3));

//3
/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}
ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)*/
ask = (question, yes, no) => (confirm(question) ? yes() : no());
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//4
let calculator = {};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
