document.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('#first-name');
  const last = document.querySelector('#last-name');
  const email = document.querySelector('#email');
  const form = document.getElementById('newsletter-form');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate first name
    if (first.value.length < 2) {
      showError(first, "First name must be at least 2 characters.");
      isValid = false;
    }

    // Validate last name
    if (last.value.length < 2) {
      showError(last, "Last name must be at least 2 characters.");
      isValid = false;
    }

    // Validate email
    if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  // Helper function to clear error messages
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
  }

  // Helper function to show error message
  function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = '#fff800';
    error.style.fontSize = '0.9em';
    error.style.marginTop = '5px';
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  // Helper function to validate email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
