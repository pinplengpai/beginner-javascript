const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event){
    console.log('YOU CLICK IT');
    const shouldChangePage = confirm('this might be malicious!, do you want to proceed?');
    if(!shouldChangePage) {
        event.preventDefault();//it will prevent the default from happening.
        // window.location = event.currentTarget.href;
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('sorry bro');
        event.preventDefault();
    }
});

function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);//It will give us everything that the user put it in on console log
}
signupForm.name.addEventListener('keyup',logEvent);
signupForm.name.addEventListener('keydown',logEvent);
signupForm.name.addEventListener('focus',logEvent);
signupForm.name.addEventListener('blur',logEvent);

//keyup: what's value is
//keydown: what's the current one is 
//blur: when it's click out of the form
//focus: when the mouth click in the form 
