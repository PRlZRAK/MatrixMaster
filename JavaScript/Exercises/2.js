//1
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 5, -1);
function filterRange(arr, a, b) {
  return a < b
    ? arr.filter((i) => i >= a && i <= b)
    : arr.filter((i) => i >= b && i <= a);
}

console.log(filtered);

//2
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((i) => i.name);

console.log(names);

//3
function getAverageAge(arr) {
  return users.reduce((a, arr) => a + arr.age, 0) / users.length;
}
console.log(getAverageAge(users));
