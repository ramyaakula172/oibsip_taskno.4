// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting normally

  // Get email and password values
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Validate user credentials (for demonstration purposes, this is hardcoded)
  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  // Check if credentials match
  if (email === correctEmail && password === correctPassword) {
    document.querySelector('.login-container').style.display = "none";  // Hide login form
    document.querySelector('.register-container').style.display = "block";  // Show registration form
  } else {
    showPopup("Wrong email or password. Please try again.");
  }
});

// Handle registration form submission
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting normally

  // Get input values
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirmPassword").value;

  // Simple validation checks
  if (password !== confirmPassword) {
    showPopup("Passwords do not match. Please try again.");
    return;
  }

  // Example of validating email format (you can improve this)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    showPopup("Please enter a valid email address.");
    return;
  }

  // Registration logic (this could involve API calls)
  if (name && email && password) {
    alert("Registration successful!");
    // You can redirect the user to the login page after successful registration.
  } else {
    showPopup("Registration failed. Please try again.");
  }
});

// Show popup with error message
function showPopup(message) {
  const popupModal = document.getElementById("popupModal");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.textContent = message;
  popupModal.style.display = "block";
}

// Close the popup
document.getElementById("closePopup")?.addEventListener("click", function() {
  document.getElementById("popupModal").style.display = "none";
});
