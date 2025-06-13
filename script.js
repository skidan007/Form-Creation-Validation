document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        let isvalid = true;
        let messages = [];

        if(usernameInput.length < 3) {
            isvalid = false;
            messages.push("Username must be at least 3 character");
        }

        if(!emailInput.includes("@") || !emailInput.includes(".")) {
            isvalid = false;
            messages.push("Please enter a valid email");
        }

        if(passwordInput.length < 8) {
            isvalid = false;
            messages.push("Password must be at least 8 character");
        }

        feedbackDiv.style.display = "block";

        if(isvalid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = mesgitsages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#ffbaba";
        }
    });

});