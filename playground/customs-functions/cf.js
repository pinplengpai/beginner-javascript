//function definition
function calculateBill(billAmount, taxRate = 5){
  //this is the function body
  console.log('running calculation Bill!!');
  const total = billAmount * (1 + taxRate); // temporary variable
  return total;
}

console.log(calculateBill(100))
//function call ** run
const wesTotal = 500
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);
// console.log (myTotal);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
//const greeting = sayHiTo('Bennn');

//console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}



