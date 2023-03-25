let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  loginSubmit();
});

const usersFile = "./src/data/users.json";

function signinSubmit() {
  let username = document.signinForm.username;
  let usernameValue = username.value.trim().replaceAll(" ", "_");
  let usernameIsValid = username.getAttribute('data-isvalid');
  console.log(usernameValue);
  console.log(usernameIsValid);

  let email = document.signinForm.email;
  let emailValue = email.value.trim().replaceAll(" ", "_");
  let emailIsValid = email.getAttribute('data-isvalid');
  console.log(emailValue);
  console.log(emailIsValid);

  let password = document.signinForm.password;
  let passwordValue = password.value.trim().replaceAll(" ", "_");
  let passwordHash = hex_sha256(passwordValue);
  let passwordIsValid = password.getAttribute('data-isvalid');
  console.log(passwordValue);
  console.log(passwordHash);
  console.log(passwordIsValid);

  let retypePassword = document.signinForm.retypePassword;
  let retypePasswordValue = retypePassword.value.trim().replaceAll(" ", "_");
  let retypePasswordIsValid = retypePassword.getAttribute('data-isvalid');
  console.log(retypePasswordValue);
  console.log(retypePasswordIsValid);
}

function loginSubmit() {
  console.log("log");
}

function forgotSubmit() {
  console.log("forgot");
}

function verifSigninInput() {
  const usernameRegex = /^[a-zA-Z0-9_.]+$/;
  const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,20}$/;

  // USERNAME
  let usernameInput = document.signinForm.username;
  let usernameSmall = usernameInput.parentElement.children[2];
  if (usernameInput != null) {
    let usernameValue = usernameInput.value.trim().replaceAll(" ", "_");
    if (usernameValue.length > 0) {
      if (usernameValue.length > 2 && usernameValue.length < 21) {
        if (usernameRegex.test(usernameValue)) {
          usernameInput.style.borderColor = "green";
          usernameInput.setAttribute("data-isvalid", "true");
          usernameSmall.textContent = "Spaces will be replaced by underscore.";
          usernameSmall.style.color = "black";
        } else {
          usernameInput.style.borderColor = "red";
          usernameInput.setAttribute("data-isvalid", "false");
          usernameSmall.textContent =
            "Username can only contain letters, numbers, dots and underscores.";
          usernameSmall.style.color = "red";
        }
      } else {
        usernameInput.style.borderColor = "red";
        usernameInput.setAttribute("data-isvalid", "false");
        usernameSmall.textContent =
          "Username must contain at least 3 characters and at most 20.";
        usernameSmall.style.color = "red";
      }
    } else {
      usernameInput.style.borderColor = "black";
      usernameInput.setAttribute("data-isvalid", "false");
      usernameSmall.textContent = "Spaces will be replaced by underscore.";
      usernameSmall.style.color = "black";
    }
  }

  // EMAIL
  let emailInput = document.signinForm.email;
  let emailSmall = emailInput.parentElement.children[2];
  if (emailInput != null) {
    let emailValue = emailInput.value.trim().replaceAll(" ", "");
    if (emailValue.length > 0) {
      if (emailRegex.test(emailValue)) {
        emailInput.style.borderColor = "green";
        emailInput.setAttribute("data-isvalid", "true");
        emailSmall.textContent = " ";
        emailSmall.style.color = "black";
      } else {
        emailInput.style.borderColor = "red";
        emailInput.setAttribute("data-isvalid", "false");
        emailSmall.textContent = "Please put a valid email.";
        emailSmall.style.color = "red";
      }
    } else {
      emailInput.style.borderColor = "black";
      emailInput.setAttribute("data-isvalid", "false");
      emailSmall.textContent = " ";
      emailSmall.style.color = "black";
    }
  }

  // PASSWORD
  let passwordInput = document.signinForm.password;
  let retypePasswordInput = document.signinForm.retypePassword;
  let passwordSmall = passwordInput.parentElement.children[2];
  let retypePasswordSmall = retypePasswordInput.parentElement.children[2];
  if (passwordInput != null) {
    let passwordValue = passwordInput.value.trim().replaceAll(" ", "");
    if (passwordValue.length > 0) {
      if (passwordValue.length > 7 && passwordValue.length < 21) {
        if (passwordRegex.test(passwordValue)) {
          passwordInput.style.borderColor = "green";
          passwordInput.setAttribute("data-isvalid", "true");
          passwordSmall.textContent =
            "Password must contain at least 8 characters and at most 20 including at least one uppercase letter, one number and one special character.";
          passwordSmall.style.color = "black";
          if (
            retypePasswordInput.value.trim().replaceAll(" ", "") ==
            passwordValue
          ) {
            retypePasswordInput.style.borderColor = "green";
            retypePasswordInput.setAttribute("data-isvalid", "true");
            retypePasswordSmall.textContent = "";
            retypePasswordSmall.style.color = "black";
          } else {
            retypePasswordInput.style.borderColor = "red";
            retypePasswordInput.setAttribute("data-isvalid", "false");
            retypePasswordSmall.textContent = "Passwords must match.";
            retypePasswordSmall.style.color = "red";
          }
        } else {
          passwordInput.style.borderColor = "red";
          passwordInput.setAttribute("data-isvalid", "false");
          passwordSmall.textContent =
            "Password must contain at least one uppercase letter, one number and one special character.";
          passwordSmall.style.color = "red";
        }
      } else {
        passwordInput.style.borderColor = "red";
        passwordInput.setAttribute("data-isvalid", "false");
        passwordSmall.textContent =
          "Password must contain at least 8 characters and at most 20.";
        passwordSmall.style.color = "red";
      }
    } else {
      passwordInput.style.borderColor = "black";
      passwordInput.setAttribute("data-isvalid", "false");
      passwordSmall.textContent =
        "Password must contain at least 8 characters and at most 20 including at least one uppercase letter, one number and one special character.";
      passwordSmall.style.color = "black";
    }
  }
}
