// const first = 'pin';
// let second = 'ben';
// var age = 200;
// //when you create out and open that is what referred to as a global variable
// //window = the global variable that they have in js file
// // those are global variable but if you type window.first >> will equal to undefine
// // window.age (var) will already attach the window.

// function sayHi() {
//   console.log('Hi!');
// }

// // if you run in console window.sayHi is going to work beause window detected the global variable except const, let

// const age = 100;

// function go() {
//   const hair = 'blonde';
//   console.log(hair); // we can't console.log hair because it is the variablei inside the function
// }
// //everything that is created inside the function, it can't be used outside of the function.

// console.log(age);

// function isCool(name) {
//   // let cool;
//   if (name === 'pin') {
//     var cool = true; // var works because it isn't function scope. it's blocked scope
//   }
//   console.log(cool);
//   return cool;
// }
// // when you have {} is refered to a block! Block is showing up in so many places
// // we can think of them as gates and those gates like to keep variable in

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

// use const by default and let with you need to resign it and don't use "var" in case a specific use case for it
// var = function scope
// let , const = block scope

const dog = 'snikers';
//lexical scoping or static scoping. The way that variable look-up or scope look-up happens is where the function are defined not where they run.

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('lulu');// it runs 'lulu' because when the  function runs an argument it will make local variable inside of that function named whatever you name the parameter
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell();
}

//if you call "yell()" is not going to work because functions are going to be scoped to the parent function and the function will only be avaiable inside of that






















