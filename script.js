const form = document.getElementById('signup');
const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const sin = document.getElementById('sin');
const errorElement = document.getElementById('error');
const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (age.value <= 17 ) {
        messages.push('Must be 18 or above')
    }

    //if (age.value === 0) {
    //    messages.push('Enter yor age')
    //}

    if (!email.value.match(mailformat)) {
        messages.push('Enter a valid email')
    }

    //if (email.value <= 0) {
    //    messages.push('Email is required')
    //}

    if(sin.value.length <= 0) {
        messages.push('Sin is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }    
})