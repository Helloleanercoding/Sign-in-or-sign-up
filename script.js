function toggleForms() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    signInForm.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');
}

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault();
    }
});
