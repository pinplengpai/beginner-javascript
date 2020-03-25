// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.append(myDiv);
// make an unordered list
const list = document.createElement('ul');
myDiv.appendChild(list);
// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
list.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
list.append(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
list.insertAdjacentElement('beforeend', li3);

console.log(myDiv);
// put that list into the above wrapper
document.body.insertAdjacentText('afterbegin', list);
// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src = "https://picsum.photos/200"; 
// set the width to 250
myImage.width = 500;
// add a class of cute
myImage.classList.add = 'cute';
// add an alt of Cute Puppy
myImage.alt = 'cute puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class = "maybe">
        <p>maybe somedaay he will realize how much I worth for him</p>
        <p>Okay, maybe it is alright to be like this or I might deserve better? I don't know. I stuck</p>
    </div>
`;
// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const maybe = myDiv.querySelector('.maybe');
maybe.children[1].classList.add('warning');
// remove the first paragraph
maybe.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height){
    const html = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;
    return html;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div')
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('pin', 3, 160);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);
// append those cards to the div
cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforeend', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
    const ButtonThatGotClicked = event.currentTarget;
    ButtonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));