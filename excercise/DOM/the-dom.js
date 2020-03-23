const p = document.querySelector('p'); //will only give us the first matching element 
const divs = document.querySelectorAll('div'); //will give us a multiple element
const imgs = document.querySelectorAll('.item img'); 
const item2 = document.querySelector('.item2');
const heading = document.querySelector('h2');
// console.dir(heading);// it's a property in order to use like getter or setter
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// pizzaList + textContent = `${pizzaList + textContent} 999`;
pizzaList.insertAdjacentText('beforeend', 'maybe');
//this is not the property. It's a method *element.inserAdjacentText(position, element);*

// console.log(heading.textContent);
//it's still show the context that it's previously write on html
//set the textcontent property on that element
// heading.textContent = 'Pin is cool';
console.log(heading.textContent);
console.log(heading.innerText); // it's the same thing as textContent except it's newer.


// function init() {
//     const p = document.querySelector('p');
//     console.log(p);
// }

// document.addEventListener('DOMContentLoaded', init);