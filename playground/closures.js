// a closure is the ability to access a parent level scope from a child scope
// even after the parent function has been determinated
// function outer() {
//   const outerVar = "Hey I am an outer Var";
//   function inner() {
//     const innerVar = "Hey I am an inner Var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
//   //inner(); when the closure come to play when you don't call inner() inside the function and called at the later point in time
// }

// const innerFn = outer();
// innerFn();


function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`
  }
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');

console.log(sayHello('pin'));
console.log(sayHey('ben'));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++; // incremented by 1
    return `your game ${gameName} score is ${score}`;
  }
}

const hokeyGame = createGame('Hockeygame');
const soccerGame = createGame('Soccer');
