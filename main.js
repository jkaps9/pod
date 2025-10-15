// Get the input element
const emailInput = document.getElementById("email");

// Add an event listener for the 'invalid' event
emailInput.addEventListener("invalid", function (event) {
  // Prevent the default browser message
  event.preventDefault();

  // Set a custom validation message
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Oops! Please add your email");
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Oops! Please check your email");
  } else {
    emailInput.setCustomValidity(""); // Clear custom message if valid
  }
});

// Add an event listener for the 'input' event to clear custom message on user input
emailInput.addEventListener("input", function () {
  emailInput.setCustomValidity("");
});
