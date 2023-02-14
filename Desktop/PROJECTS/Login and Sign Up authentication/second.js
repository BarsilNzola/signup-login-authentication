// select the form
const form = document.getElementById('login-form');

// handle the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form data
    const data = new FormData(form);
    const email = data.get('email');
    const password = data.get('password');

    // Get the stored data from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the email and password match
    if (email === storedEmail && password === storedPassword) {
        alert('You are logged in!');
    } else {
        alert('Invalid email or password');
    }
});