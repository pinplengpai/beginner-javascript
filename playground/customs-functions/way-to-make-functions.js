//first class citizen
// const age = 100;
// const cool = true;
// these are values that are numbers, objects, strings and boolean.
// function can be passed to other function, function can be stored and can do many things.

// Different way of functions.
//normal function
// function docterize(firstName) {
//   return `Dr ${firstName}`;
// }

// anonymous functions
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// // function expression (is where you store a function as a value in a variable)
// const docterize = function(firstName) {
//   return `Dr. ${firstName}`;
// }

// How to do make the function shorter.

//1
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

//2
// const inchToCM = function inchToCM(inches) {
//   return inches * 2.54;
// }

// //3
// const inchToCM = (inches) => inches * 2.54;

// // another exercise to make function shorter
// // 1
// // function add (a, b = 3) {
// //   const total = a + b;
// //   return total;
// // }

// // 2 (what I tried myself)
// const add = (a, b = 3) =>  a + b;


// returning an object

// function makeBaby(first, last){
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// To make it shorter
//const makeBaby = (first, last) => ({name: `${first} ${last}`, age: 0});
// IIFE = Immediatly invoked/run function expression
// (function(age){
//   return `you are cool and age ${age}`;
// })(10); // it used to be popular before having blcok scope.

// methods!
const pin = {
  name: 'pin plengpai',
  //method
  sayHi: function sayHi() {
    console.log('Hey Pin!!')
    return 'Hey Pinn';
  },

  //short hand method ** THE MOST COMMON WAY
  yellHi(){
    console.log('HEYYY PINNNNN');
  },
  //arrow function
  wisperHi: () => {
    console.log('hi Pin...shhhhhhh');
  }
}

// callback function
// click call back
const button = document.querySelector('.clickMe')
console.log(button);
// the Event Listener that will listen for a click and
//call back here is the function. Could you be a dear call that function when someone
// is clicking it?

function handleClick() {
  console.log('Great Clicking!!');
}
//button.addEventListener('click', handleClick);
// button.addEventListener('click', function() {
//   console.log('nice jobbbbbb');
// }); // pass an anonymous function as a value directly and the browser will know to call the function itself
// it is a refer to the callback function. A function that gets passed into another function
// and then it is called by the browser at a later point in time.
// timer callback
setTimeout(pin.Yellhi, 200);



