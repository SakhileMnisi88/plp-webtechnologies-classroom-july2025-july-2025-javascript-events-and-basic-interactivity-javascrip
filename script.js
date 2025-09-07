

//Counter
let counter = 0;
const counterDisplay = document.getElementById('counter-display');

//Event handlers for counter buttons
document.getElementById('increment-btn').addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
});

document.getElementById('decrement-btn').addEventListener('click', function() {
    counter--;
    counterDisplay.textContent = counter;
});

document.getElementById('reset-btn').addEventListener('click', function() {
    counter = 0;
    counterDisplay.textContent = counter;
});

//Color Box Changer
const colorBox = document.getElementById('color-box');

document.getElementById('red-btn').addEventListener('click', function() {
    colorBox.style.backgroundColor = 'red';
});

document.getElementById('blue-btn').addEventListener('click', function() {
    colorBox.style.backgroundColor = 'blue';
});

document.getElementById('green-btn').addEventListener('click', function() {
    colorBox.style.backgroundColor = 'green';
});

document.getElementById('random-color-btn').addEventListener('click', function() {
    const colors = ['purple', 'orange', 'yellow', 'pink', 'cyan', 'brown'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

// Custom Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous errors
    clearErrors();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    let isValid = true;
    
    // Name validation
    if (name === '') {
        showError('name-error', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Email validation
    if (email === '') {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    if (phone === '') {
        showError('phone-error', 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(phone)) {
        showError('phone-error', 'Please enter a valid phone number (10 digits)');
        isValid = false;
    }
    
    //all validations pass
    if (isValid) {
        document.getElementById('form-success').textContent = 'Form submitted successfully!';
        document.getElementById('contact-form').reset();
    }
});

//function to show error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

//function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');
    document.getElementById('form-success').textContent = '';
}

//email validation 
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

//Custom phone validation 
function isValidPhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}