
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (name.length < 2) {
        showMessage("Please enter your full name.", "red");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage("Please enter a valid email address.", "red");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        showMessage("Enter a valid 10-digit phone number.", "red");
        return;
    }

    if (password.length < 8) {
        showMessage("Password must be at least 8 characters.", "red");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match!", "red");
        return;
    }

    showMessage("Registration successful!", "green");

    form.reset();
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}
