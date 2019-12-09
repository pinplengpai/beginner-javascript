const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   if(person.name === 'Wes') {
//     console.warn('dumb name');
//   }
// });

// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('DONE!!');
//   console.groupEnd(`${person.name}`);
// });

// people.forEach((person, index) => {
//   debugger; // will stop running javascrip and it's called breakpoint
//   console.log(person.name);
// });


//console.table(people);//you can see the data in table easily

// Console Methods

// Callstack
//>> it's great to be able to read the red letters and know where the bug goes

// Grabbing Elements
//>> $0.value (0 = the last element)


// Breakpoints

// Scope

// Network Requests
  // >> you will see all of the file that make this web is working

// Break On Attribute

// Some Setup Code

// function doALotOfStuff(){
//   console.group('doing some stuff');
//   console.log("Hey, I'm one");
//   console.warn("wastch out");
//   console.error("Hey");
//   console.groupEnd('doing some stuff');
// } // it will group this function into a nice collapsible thing

function doctorize(name) {
  //console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}


function greet(name) {
  //doesntExist();//will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('starting the app');
  go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
