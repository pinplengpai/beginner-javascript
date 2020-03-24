console.log('it works');
const item = document.querySelector('.item');

const src = `https://picsum.photos/500`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2> ${desc}</h2>
        <img src = "${src}" alt="${desc}"/>
    </div>
`;//it will never be an element. It will only be a string.

//console.log(typeof myHTML);
item.innerHTML = myHTML;

//when we use ` ` we can interpolate the html easily 
//console.log(item.innerHTML);//getter

//turn a string into a DOM element
const myFragment = document.createRange()
.createContextualFragment(myHTML);

// console.log(myFragment.querySelector('img'));
// console.log(myFragment); 
document.body.appendChild(myFragment);
//then we can use append or insertAdjercent here