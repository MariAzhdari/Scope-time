// 1.
function one() {
  var a = 10
  console.log(a);
}
one();
 // what is the value of a

// // 2.
function two() {
  let b = 10;
  b = 20;
  console.log(b);
}
two();
 // what is the value of b and why

// // 3.
var c;
function three() {
  c = 25;
}
three();
console.log(c); // what is the value of c and why

// 4.
function four() {
 var d = 25;
 console.log(d);
}
four();
 // what is the value of d and why

// // 5.
let e;
function five() {
  const greeting = "Hello";

  function greet() {
    let name = "Eddie";
    e = `${greeting} ${name}`;
  }
  greet();
}
five();
console.log(e); // what is the value of e and why

// // 6.
 let f = 50;
function six() {
  if (true) {
  }
  console.log(f); // what is the value of f and why
}
six();


//E 2

let sentence = ["Hello", "Code", "Your", "Future"];
let [firstWord,secondWord,thirdWord,fourthWord] = sentence;

// // let firstWord = item[0];
// // let secondWord = item[1];
// // let thirdWord = item[2];
// // let fourthWord = item[3];

console.log(
  `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`
);

//e 3
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

// Assign variables using array destructuring on this line
let [sum, multiply] = sumAndMultiply(2, 3);
console.log(
  `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`
);

//e4
let citiesByPopulation = [
  { name: "London", population: 8000000 },
  { name: "Birmingham", population: 1000000 },
  { name: "Glasgow", population: 600000 },
  { name: "Manchester", population: 500000 },
];

// Assign variables using array destructuring on this line
let[london, birmingham, glasgow, manchester] = citiesByPopulation;


console.log(`${london.name} population is ${london.population}`);
console.log(`${birmingham.name} population is ${birmingham.population}`);
console.log(`${glasgow.name} population is ${glasgow.population}`);
console.log(`${manchester.name} population is ${manchester.population}`);