document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'mdsajedulra@gmail.com' && password === 'mdsajedulra') {
        window.location.href = 'bank.html';
    }
    else {
        alert("Password is incorrect");
    }
})