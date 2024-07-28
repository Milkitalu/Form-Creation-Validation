
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', e => {
        e.preventDefault;
    });


    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    isValid = true;
    let message = [];

    if (username.length < 3) {
        isValid = false;
        message.push("message0") = "Username should be greater than three characters";
    }

    if (email.includes('@') && email.includes('.')) {
        console.log("Valid Email")
    } else {
        isValid = false;
        message.push() = "Please enter valid email";
    }

    if (password.length >= 8) {
        console.log("Your password matches minimum character");
    } else {
        isValid=false;
        message.push() = "Password should be at least eight character";
    }

    feedbackDiv.style.display = "block" ;

    if (isValid === true) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";

    } else {
        feedbackDiv.innerHTML = message.join("<br>");
        feedbackDiv.style.color = "#dc3545" ;
    }

});
