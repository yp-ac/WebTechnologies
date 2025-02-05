const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const prnInput = document.getElementById("prn");

// Helper functions for validating on blur
function validateName() {
    const errorElem = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        errorElem.textContent = "Please provide a valid name!";
        nameInput.setAttribute("aria-invalid", "true");
    } else {
        errorElem.textContent = "";
        nameInput.setAttribute("aria-invalid", "false");
    }
}

function validateEmail() {
    const errorElem = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        errorElem.textContent = "Please provide a valid email!";
        emailInput.setAttribute("aria-invalid", "true");
    } else {
        errorElem.textContent = "";
        emailInput.setAttribute("aria-invalid", "false");
    }
}

function validatePassword() {
    const errorElem = document.getElementById("passwordError");
    if (passwordInput.value.length < 6) {
        errorElem.textContent = "Password must be at least 6 characters!";
        passwordInput.setAttribute("aria-invalid", "true");
    } else {
        errorElem.textContent = "";
        passwordInput.setAttribute("aria-invalid", "false");
    }
}

function validateDob() {
    const errorElem = document.getElementById("dobError");
    if (dobInput.value === "") {
        errorElem.textContent = "Please provide a valid date of birth!";
        dobInput.setAttribute("aria-invalid", "true");
    } else {
        errorElem.textContent = "";
        dobInput.setAttribute("aria-invalid", "false");
    }
}

function validatePrn() {
    const errorElem = document.getElementById("prnError");
    if (prnInput.value.length !== 8) {
        errorElem.textContent = "Please provide a valid PRN!";
        prnInput.setAttribute("aria-invalid", "true");
    } else {
        errorElem.textContent = "";
        prnInput.setAttribute("aria-invalid", "false");
    }
}

// Attach blur events for validation after the field loses focus
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
dobInput.addEventListener("blur", validateDob);
prnInput.addEventListener("blur", validatePrn);

// Form submission validation
document
    .getElementById("registrationForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        // Run all validations on submit
        validateName();
        validateEmail();
        validatePassword();
        validateDob();
        validatePrn();

        const inputs = [
            nameInput,
            emailInput,
            passwordInput,
            dobInput,
            prnInput,
        ];
        const isValid = inputs.every(
            (input) => input.getAttribute("aria-invalid") === "false"
        );

        if (isValid) {
            alert("Registration Successful!");
        }
    });
