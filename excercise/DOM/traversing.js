//traversing means up down moving and go over. You need to seelc base on the position...
// const wes = document.querySelector('.wes');
// console.log(wes.children); // just get the child element
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);
// console.log(wes.childNodes); // get all of the tag

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove(); // it will automatically remove

console.log(p); // we still have 'p' in the javascript memory
document.body.appendChild(p); //it will add again