//first class citizen
// const age = 100;
// const cool = true;
// these are values that are numbers, objects, strings and boolean.
// function can be passed to other function, function can be stored and can do many things.

// Different way of functions.
//normal function
// function docterize(firstName) {
//   return `Dr ${firstName}`;
// };

// anonymous functions
// function (firstName) {
//   return `Dr. ${firstName}`;
// };

// function expression (is where you store a function as a value in a variable)
const docterize = function(firstName) {
  return `Dr. ${firstName}`;
};
