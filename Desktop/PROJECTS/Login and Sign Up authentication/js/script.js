// select the form
const form = document.getElementById('signup-form');

// Handle the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form data
    const data = new FormData(form);
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    const passwordConfirm = data.get('passwordConfirm');

    //check if the passwords match
    if (password !== passwordConfirm) {
        alert('Passwords do not match');
    } else {
        //Store the data in the localstorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        //Redirect the user to the login page
        window.location.href = 'login.html';
    }
});