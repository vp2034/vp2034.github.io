document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-form");
    function validateInput(input, errorElement, validationFunction) {
        const value = input.value.trim();
        if (validationFunction(value)) {
            errorElement.textContent = "";
            input.classList.remove("error");
        } else {
            errorElement.textContent = "Invalid input";
            input.classList.add("error");
        }
    }

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    function isNotEmpty(value) {
        return value !== "";
    }
    function isValidEmail(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    }
    function checkPassword(value) {
        return value.length>=8;
    }
    function checkConfirmPassword(value) {
        return password===confirmPassword;
    }

    username.addEventListener("blur", function () {
        validateInput(username, document.getElementById("username-error"), isNotEmpty);
    });
    email.addEventListener("blur", function () {
        validateInput(email, document.getElementById("email-error"), isValidEmail);
    });
    password.addEventListener("blur", function () {
        validateInput(password, document.getElementById("password-error"), checkPassword);
    });
    confirmPassword.addEventListener("blur", function () {
        validateInput(confirmPassword, document.getElementById("confirmPassword-error"), checkConfirmPassword);
    });

    form.addEventListener("submit", function(){});
});