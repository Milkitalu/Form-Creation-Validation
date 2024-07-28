
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(e) {
        e.preventDefault;
    });


    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    isValid = true;
    let messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push() = "Username should be greater than three characters";
    }

    if (email.includes('@') && email.includes('.')) {
        console.log("Valid Email")
    } else {
        isValid = false;
        messages.push() = "Please enter valid email";
    }

    if (password.length >= 8) {
        console.log("Your password matches minimum character");
    } else {
        isValid=false;
        messages.push() = "Password should be at least eight character";
    }

    messages["message"].feedbackDiv.style.display = block ;

    if (isValid === true) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";

    } else {
        feedbackDiv.innerHTML = message.join("<br>");
        feedbackDiv.style.color = "#dc3545" ;
    }

});
