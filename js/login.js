document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'mdsajedulra@gmail.com' && password === 'mdsajedulra') {
        console.log('valid user');
    }
    else {
        console.log('not a valid user');
    }
})