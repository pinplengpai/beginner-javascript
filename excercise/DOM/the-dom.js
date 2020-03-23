const p = document.querySelector('p'); //will only give us the first matching element 
const divs = document.querySelectorAll('div'); //will give us a multiple element
const imgs = document.querySelectorAll('.item img'); 
const item2 = document.querySelector('.item2');
const heading = document.querySelector('h2');
// console.dir(heading);// it's a property in order to use like getter or setter
const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList + textContent = `${pizzaList + textContent} 999`;
pizzaList.insertAdjacentText('beforeend', 'maybe');
//this is not the property. It's a method *element.inserAdjacentText(position, element);*

// console.log(heading.textContent);
//it's still show the context that it's previously write on html
// //set the textcontent property on that element
// // heading.textContent = 'Pin is cool';
// console.log(heading.textContent);
// console.log(heading.innerText); // it's the same thing as textContent except it's newer.


// function init() {
//     const p = document.querySelector('p');
//     console.log(p);
// }

// document.addEventListener('DOMContentLoaded', init);

//class! 
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');  
pic.classList.toggle('round'); // toggle = add it if it is there and remove it if it's not there.
console.log(pic.classList); //array all of the classes 

function toggleRound() {
    pic.classList.toggle('round');
} // it will allow us to step in with css and add to move with transition.

pic.addEventListener('click', toggleRound); // everytime we click, it will run that function. 
//pic.classList.contains('round'); 
//the dom will tell us true or false as we click to toggle

// classList will give us utility function/methos for working with it. It's somewhat new.
