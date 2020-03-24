console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = "I am a P";
myParagraph.classList.add('special');
console.log(myParagraph); //it's not on the page yet but already in javascript memory.

const myHeader = document.createElement('h2');
myHeader.textContent = "I am a Header";
myHeader.classList.add('header');
console.log(myHeader);

const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/200";
myImage.alt = 'nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// const body = document.querySelector('body'); it is totally right but
//but the document actually gives us reference to the body element quickly via document but not every element will be accessible that way.  
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); //you can see that it's inject in the dom for us
//appenChild can put in any Node. Everytime we use the appendChild it will modify the DOM. It will cause the brower which will call reflow meaning 
//the browser goes like there are something new on the page. I need to convert html, css into what we see. It's like a waterfall on the page. If you do it a lot, it will start eating other things on your page. 
// it will cause the experience to go down esp when you have animation.
// now change document.body.appenChild(myDive); to the last so it will refresh only once


// oh! shoot. we need to add something to the top. Let's add heading 
const heading = document.createElement('h1');
heading.textContent = 'cool things';
myDiv.insertAdjacentElement('afterbegin', heading);
// myDiv.appendChild(heading); it will add at the buttom

const ul = document.createElement('ul');
myDiv.insertAdjacentElement('afterbegin', ul);

const li1 = document.createElement('li');
li1.textContent = 'one';
ul.insertAdjacentElement('afterbegin', li1);

const li3 = document.createElement('li');
li3.textContent = 'three';
ul.append(li3);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.append(li2);

const li4 = document.createElement('li');
li4.textContent = 'four';
ul.insertAdjacentElement('beforeend', li4);

const li5 = document.createElement('li');
li5.textContent = 'five';
ul.appendChild(li5);

//cloneNode(true);