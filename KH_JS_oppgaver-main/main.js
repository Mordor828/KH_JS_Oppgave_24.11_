const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"
//Answer:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"
//Answer:
let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".
//Answer:

for (let i = "apple"; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = "banana"; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = "cherry"; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = "date"; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = "apple"; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = "eggplant"; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.
//Answer:

myArray.push("mango");

for (const fruit of myArray) {
  console.log(fruit);
}

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()
//Answer:

let index = myArray.indexOf("cherry");

if (index !== -1) {
  myArray.splice(index, 1);
}

myArray.forEach(function (item) {
  console.log(item);
});

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result
//Answer:
myArray.shift();

myArray.pop();

console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a space
//Answer:
const myString = myArray.join(", ");
console.log(myString);

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument
// Answer:
function numberSquared(number) {
  return num * num;
}

numberSquared();

let result = squareNumber(5);
console.log(result);

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
//Answer:
function oddOrEven(number) {
  return number % 2 === 0 ? "even" : "odd";
}
//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
//Answer:
function printFibonacci(n) {
  let a = 0,
    b = 1;
  console.log(a);

  for (let i = 1; i < n; i++) {
    console.log(b);
    let c = a + b;
    a = b;
    b = c;
  }
}

printFibonacci(10);

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {}

fizzbuzz();

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1;
  return; /// din kode her
}
console.log(factorial(5));
