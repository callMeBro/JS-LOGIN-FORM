//function to render message
function setFormMessage(formElement, type, message) {
  //select specific for element message and save in variable
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  //reset message
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  //add new class to the form message
  //pass in type as a variable
  messageElement.classList.add(`form__message--${type}`);
}

//Function that takes in the inputElement and message and sets it
function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  //goes to the parent of the selected message
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

//function that clears the input element message
function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}
//when document is ready load forms
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  const forgotPasswordForm = document.querySelector("#forgotPassword");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      //goes to the actual href page
      e.preventDefault();
      //hide login form when creating an account
      loginForm.classList.add("form--hidden");
      //remove hidden class to create account
      createAccountForm.classList.remove("form--hidden");
    });

  //add event listener to forgot password link button
  document.querySelector("#forgotPass").addEventListener("click", (e) => {
    // e.preventDefault();
    forgotPasswordForm.classList.remove("form--hidden");
    loginForm.classList.add("form--hidden");
  });

  //add event listener to the continue button
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  //When the login link is pressed the login form hidden class is removed and
  //Hides the create account form
  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  //add event listener to the continue button
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
