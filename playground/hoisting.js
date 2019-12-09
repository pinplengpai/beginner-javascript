//Hoisting is variable decorations and function declaration that are hoisted to the top of the file

//what does this file do?
sayHi();

function sayHi() {
  console.log('hey');
  console.log(add(10, 2));
}

// In hoisting, you can technically run the function before it exists


//how does this file do it?
function add(a, b) {
  return a + b;
}
