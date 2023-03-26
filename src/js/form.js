let form = document.querySelector("form");
if (form != null) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loginSubmit();
  });
}

const usernameRegex = /^[a-zA-Z0-9_.]+$/;
const emailRegex = /^[a-z0-9.-_]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,20}$/;
const usersFile = "./src/data/users.json";

function signinSubmit() {
  let username = document.signinForm.username;
  let usernameError = username.parentElement.children[2];
  let usernameValue = username.value.trim().replaceAll(" ", "_");
  let usernameIsValid = username.getAttribute("data-isvalid");
  if (usernameValue.length < 1) {
    usernameError.textContent = "Please write an username.";
    usernameError.style.color = "red";
    username.style.borderColor = "red";
  }

  let email = document.signinForm.email;
  let emailError = email.parentElement.children[2];
  let emailValue = email.value.trim().replaceAll(" ", "_").toLowerCase();
  let emailIsValid = email.getAttribute("data-isvalid");
  if (emailValue.length < 1) {
    emailError.textContent = "Please write an email.";
    emailError.style.color = "red";
    email.style.borderColor = "red";
  }

  let password = document.signinForm.password;
  let passwordError = password.parentElement.children[2];
  let passwordValue = password.value.trim().replaceAll(" ", "_");
  let passwordHash = hex_sha256(passwordValue);
  let passwordIsValid = password.getAttribute("data-isvalid");
  if (passwordValue.length < 1) {
    passwordError.textContent = "Please write an password.";
    passwordError.style.color = "red";
    password.style.borderColor = "red";
  }

  let retypePassword = document.signinForm.retypePassword;
  let retypePasswordError = retypePassword.parentElement.children[2];
  let retypePasswordValue = retypePassword.value.trim().replaceAll(" ", "_");
  let retypePasswordIsValid = retypePassword.getAttribute("data-isvalid");
  if (retypePasswordValue.length < 1) {
    retypePasswordError.textContent = "Please write again your password.";
    retypePasswordError.style.color = "red";
    retypePassword.style.borderColor = "red";
  }

  let usernameTab = [];
  let emailTab = [];

  let request = new XMLHttpRequest();
  request.open("GET", usersFile);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    if (data != null) {
      data.forEach((line) => {
        usernameTab.push(line["username"]);
        emailTab.push(line["email"]);
      });
      if (usernameTab.includes(usernameValue)) {
        usernameError.textContent = "This username is already used.";
        usernameError.style.color = "red";
        username.style.borderColor = "red";
      }
      if (emailTab.includes(emailValue)) {
        emailError.textContent = "This email is already used.";
        emailError.style.color = "red";
        email.style.borderColor = "red";
      }

      if (
        usernameTab.includes(usernameValue) == false &&
        emailTab.includes(emailValue) == false &&
        usernameIsValid == "true" &&
        emailIsValid == "true" &&
        passwordIsValid == "true" &&
        retypePasswordIsValid == "true"
      ) {
        localStorage.setItem("username", usernameValue);
        window.location.href = `./src/php/writeFile.php?u=${usernameValue}&e=${emailValue}&p=${passwordHash}`;
        isConnected();
      }
    }
  };
}

function loginSubmit() {
  let usernameOrEmail = document.loginForm.usernameOrEmail;
  let usernameOrEmailSmall = usernameOrEmail.parentElement.children[2];
  let usernameOrEmailValue = usernameOrEmail.value.trim().replaceAll(" ", "");
  let password = document.loginForm.password;
  let passwordSmall = password.parentElement.children[2];
  let passwordValue = password.value.trim().replaceAll(" ", "");
  let passwordHash = hex_sha256(passwordValue);
  let usernameTab = [];
  let emailTab = [];
  let passwordTab = [];
  let request = new XMLHttpRequest();
  request.open("GET", usersFile);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    if (data != null) {
      let u = 0;
      let e = 0;
      data.forEach((line) => {
        usernameTab.push(line["username"]);
        emailTab.push(line["email"]);
        passwordTab.push(line["password"]);
        u = usernameTab.indexOf(usernameOrEmailValue);
        e = emailTab.indexOf(usernameOrEmailValue);
      });
      if (usernameTab.includes(usernameOrEmailValue)) {
        usernameOrEmailSmall.textContent = "";
        usernameOrEmailSmall.style.color = "black";
        usernameOrEmail.style.borderColor = "green";
        if (passwordHash == passwordTab[u]) {
          passwordSmall.textContent = "";
          passwordSmall.style.color = "black";
          password.style.borderColor = "green";
          localStorage.setItem("username", usernameTab[u]);
        } else {
          passwordSmall.textContent = "Wrong password.";
          passwordSmall.style.color = "red";
          password.style.borderColor = "red";
        }
      } else {
        usernameOrEmailSmall.textContent = "This username isn't registered.";
        usernameOrEmailSmall.style.color = "red";
        usernameOrEmail.style.borderColor = "red";
        if (emailTab.includes(usernameOrEmailValue)) {
          usernameOrEmailSmall.textContent = "";
          usernameOrEmailSmall.style.color = "black";
          usernameOrEmail.style.borderColor = "green";
          if (passwordHash == passwordTab[e]) {
            passwordSmall.textContent = "";
            passwordSmall.style.color = "black";
            password.style.borderColor = "green";
            localStorage.setItem("username", usernameTab[e]);
          } else {
            passwordSmall.textContent = "Wrong password.";
            passwordSmall.style.color = "red";
            password.style.borderColor = "red";
          }
        } else {
          usernameOrEmailSmall.textContent = "This email isn't registered.";
          usernameOrEmailSmall.style.color = "red";
          usernameOrEmail.style.borderColor = "red";
        }
      }
    }
  };
}

function forgotSubmit() {
  let email = document.forgotForm.forgotEmail;
  let emailSmall = email.parentElement.children[2];
  let emailValue = email.value.trim().replaceAll(" ", "").toLowerCase();
  let emailTab = [];
  let request = new XMLHttpRequest();
  request.open("GET", usersFile);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const data = request.response;
    if (data != null) {
      data.forEach((line) => {
        emailTab.push(line["email"]);
      });
      if (emailTab.includes(emailValue)) {
        emailSmall.textContent = "";
        emailSmall.style.color = "black";
        email.style.borderColor = "green";
        window.location.href = `./src/php/sendEmail.php?e=${emailValue}`;
      } else {
        emailSmall.textContent = "This email isn't registered.";
        emailSmall.style.color = "red";
        email.style.borderColor = "red";
      }
    }
  };
}

function verifForgotInput() {
  let email = document.forgotForm.forgotEmail;
  let emailSmall = email.parentElement.children[2];
  if (email != null) {
    let emailValue = email.value.trim().replaceAll(" ", "");
    if (emailValue.length > 0) {
      if (emailRegex.test(emailValue)) {
        email.style.borderColor = "green";
        emailSmall.textContent = " ";
        emailSmall.style.color = "black";
      } else {
        email.style.borderColor = "red";
        emailSmall.textContent = "Please put a valid email.";
        emailSmall.style.color = "red";
      }
    } else {
      email.style.borderColor = "black";
      emailSmall.textContent = " ";
      emailSmall.style.color = "black";
    }
  }
}

function verifSigninInput() {
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
