// Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");
let signNowButton = document.getElementById("sign-now");

// Toggle Dark Mode function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Validate Form function
const validateForm = () => {
    let containsErrors = false;
    let petitionInputs = document.getElementById("sign-petition").elements;
    const email = document.getElementById('email');

    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            petitionInputs[i].classList.add('error');
            containsErrors = true;
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    // Check email for .com
    if (!email.value.includes('.com')) {
        containsErrors = true;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    // If no errors, add signature and clear form
    if (!containsErrors) {
        addSignature(); // Assuming addSignature() function is defined elsewhere
        clearFields(); // Assuming clearFields() function clears form fields

        // Reset containsErrors
        containsErrors = false;
    }
};

// Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);

// Register a 'click' event listener for the sign now button
signNowButton.addEventListener('click', validateForm);

<!-- JavaScript for Dark Mode toggle and Counter -->
<script>
    const themeButton = document.getElementById('theme-button');
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

  // JavaScript for counter
  let count = 3;
  function addSignature() {

     
 <script>
 
   
 </script>