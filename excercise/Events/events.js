//eventlistener, how to listen to them, how to do stuff when things happens. So DOM elements (things that's on the page) 
//they emit events when they're clicked, when there are hovered, when there are dragged, they will start to fire of they will emit events 
//when they are interacted with. We can use eventlistener to use it when it happen and do something and react to them
//so you can attach listener to all elements and you also can attach them to the document as well as the window
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const hoorey = () => console.log('HOOREY');

console.log(butts);

// function handleClicked() {
    //     console.log('it got clicked');
    // }
    
    // function buyItem(){
        //     console.log('Buying Itlem');
        // }
        
        // function attachListener(buyButton){
            //     console.log('Binding the buy button');
            //     buyButton.addEventListener('click', buyItem)
            // }
            
            butts.addEventListener('click', hoorey);
            coolButton.addEventListener('click', handleClicked);
            
            //there are 3 steps! 1.go get something 2.listen for something 3.go ahead and do something.
            //callback function is a  regular function. It's a word we use to describe a function we pass to a method
            //that will then be called a later point of time but instead us calling the function, we provide a name or reference to a function to addEventListener
            //and then the browser will take care of calling or running that function for us when it needs to 
            //it similars to say sort of like "hey browser, I made this function, when somebody click on my butt button, can you please do me a favor and run for me, thank you:)"
            
            butts.removeEventListener('click', handleClicked); //binding = taking a funciton and listening for a specific click aginst the element
            
            //listen to multiple items : in order to attach addeventlistener in multiple item, you need to loop in individually.
            // we can use foreach to loop each item which will run the funciton of foreach of the node item.
            
            const buyButtons = document.querySelectorAll('button.buy');
            function handleByButtonClick(){
                console.log('You are buying it');
            }

            buyButtons.forEach(attachListener);
            
            
            //parsefloat(keep decimal), parseInt() doesn't 
            // event.target = the thing that actually got clicked, event.currenttarget = the thing that fired the eventlistener
            