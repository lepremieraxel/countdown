const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalTitle = document.querySelector(".modal-title h3");
const modalSubtitle = document.querySelector(".modal-title p");
const othersActions = document.querySelector(".others-actions");
const inputContainer = document.querySelectorAll(".input-container");

function closeModal() {
  modal.style.transform = "scale(.5)";
  modal.style.opacity = '0';
  modalOverlay.style.backdropFilter = "blur(0px)";
  modalOverlay.style.zIndex = "-1";
  modalOverlay.style.opacity = "0";
}

function openModal() {
  modal.style.transform = "scale(1)";
  modal.style.opacity = '1';
  modalOverlay.style.backdropFilter = "blur(40px)";
  modalOverlay.style.zIndex = "50";
  modalOverlay.style.opacity = "1";
}

function loginForm(){
  let modalFormEl = document.querySelector(".modal form");
  modal.removeChild(modalFormEl);

  modalTitle.textContent = "Hi! Welcome Back";
  modalSubtitle.textContent = "Please log in to access edit mode.";

  othersActions.children[0].setAttribute("onclick", "forgotForm()");
  othersActions.children[0].textContent = "Forgot password";

  othersActions.children[1].setAttribute("onclick", "signinForm()");
  othersActions.children[1].textContent = "Haven't an account";

  const modalForm = document.createElement('form');
  modalForm.setAttribute('name', 'loginForm');
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginSubmit();
  })

  const spanUsernameOrEmail = document.createElement('span');
  spanUsernameOrEmail.classList.add('input-container');

  const inputUsernameOrEmail = document.createElement('input');
  inputUsernameOrEmail.setAttribute("type", "text");
  inputUsernameOrEmail.setAttribute("name", "usernameOrEmail");
  inputUsernameOrEmail.setAttribute("id", "usernameOrEmail");
  inputUsernameOrEmail.setAttribute("placeholder", " ");
  inputUsernameOrEmail.setAttribute("autocomplete", "off");
  inputUsernameOrEmail.setAttribute("data-isvalid", "false");
  // inputUsernameOrEmail.addEventListener('input', () => {
  //   verifInput();
  // });

  const labelUsernameOrEmail = document.createElement('label');
  labelUsernameOrEmail.setAttribute("for", "usernameOrEmail");
  labelUsernameOrEmail.textContent = "Username or email *";

  const smallUsernameOrEmail = document.createElement('small');
  smallUsernameOrEmail.textContent = " ";

  spanUsernameOrEmail.appendChild(inputUsernameOrEmail);
  spanUsernameOrEmail.appendChild(labelUsernameOrEmail);
  spanUsernameOrEmail.appendChild(smallUsernameOrEmail);

  const spanPassword = document.createElement('span');
  spanPassword.classList.add('input-container');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("name", "password");
  inputPassword.setAttribute("id", "password");
  inputPassword.setAttribute("placeholder", " ");
  inputPassword.setAttribute("autocomplete", "off");
  inputPassword.setAttribute("data-isvalid", "false");
  // inputPassword.addEventListener('input', () => {
  //   verifInput();
  // });

  const labelPassword = document.createElement('label');
  labelPassword.setAttribute("for", "password");
  labelPassword.textContent = "Password *";

  const smallPassword = document.createElement('small');
  smallPassword.textContent = " ";

  spanPassword.appendChild(inputPassword);
  spanPassword.appendChild(labelPassword);
  spanPassword.appendChild(smallPassword);

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('name', 'submit');
  buttonLogin.textContent = "Log In";

  modalForm.appendChild(spanUsernameOrEmail);
  modalForm.appendChild(spanPassword);
  modalForm.appendChild(buttonLogin);
  modal.insertBefore(modalForm, othersActions);
}

function forgotForm() {
  let modalFormEl = document.querySelector(".modal form");
  modal.removeChild(modalFormEl);

  modalTitle.textContent = "Are you a goldfish?";
  modalSubtitle.textContent = "Enter your email to receive a password reset mail.";

  othersActions.children[0].setAttribute("onclick", "loginForm()");
  othersActions.children[0].textContent = "I've don't forgot my password";

  othersActions.children[1].setAttribute("onclick", "signinForm()");
  othersActions.children[1].textContent = "Haven't an account";

  const modalForm = document.createElement('form');
  modalForm.setAttribute('name', 'forgotForm');
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    forgotSubmit();
  })

  const forgotEmail = document.createElement('span');
  forgotEmail.classList.add('input-container');

  const inputForgotEmail = document.createElement('input');
  inputForgotEmail.setAttribute("type", "email");
  inputForgotEmail.setAttribute("name", "forgotEmail");
  inputForgotEmail.setAttribute("id", "forgotEmail");
  inputForgotEmail.setAttribute("placeholder", " ");
  inputForgotEmail.setAttribute("autocomplete", "off");
  inputForgotEmail.setAttribute("data-isvalid", "false");
  inputForgotEmail.addEventListener('input', () => {
    verifForgotInput();
  });

  const labelForgotEmail = document.createElement('label');
  labelForgotEmail.setAttribute("for", "forgotEmail");
  labelForgotEmail.textContent = "Email *";

  const smallForgotEmail = document.createElement('small');
  smallForgotEmail.textContent = "";

  const buttonForgotEmail = document.createElement('button');
  buttonForgotEmail.setAttribute('name', 'submit');
  buttonForgotEmail.textContent = "Send";

  forgotEmail.appendChild(inputForgotEmail);
  forgotEmail.appendChild(labelForgotEmail);
  forgotEmail.appendChild(smallForgotEmail);
  modalForm.appendChild(forgotEmail);
  modalForm.appendChild(buttonForgotEmail);
  modal.insertBefore(modalForm, othersActions);
}

function signinForm() {
  let modalFormEl = document.querySelector(".modal form");
  modal.removeChild(modalFormEl);

  modalTitle.textContent = "Hello! Nice To Meet You.";
  modalSubtitle.textContent = "Please sign in to access edit mode.";

  othersActions.children[0].setAttribute("onclick", "loginForm()");
  othersActions.children[0].textContent = "I've already an account";

  othersActions.children[1].setAttribute("onclick", "");
  othersActions.children[1].textContent = "";

  const modalForm = document.createElement('form');
  modalForm.setAttribute('name', 'signinForm');
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signinSubmit();
  })
  
  const spanUsername = document.createElement('span');
  spanUsername.classList.add('input-container');

  const inputUsername = document.createElement('input');
  inputUsername.setAttribute("type", "text");
  inputUsername.setAttribute("name", "username");
  inputUsername.setAttribute("id", "username");
  inputUsername.setAttribute("placeholder", " ");
  inputUsername.setAttribute("autocomplete", "off");
  inputUsername.setAttribute("data-isvalid", "false");
  inputUsername.addEventListener('input', () => {
    verifSigninInput();
  });

  const labelUsername = document.createElement('label');
  labelUsername.setAttribute("for", "username");
  labelUsername.textContent = "Username *";

  const smallUsername = document.createElement('small');
  smallUsername.textContent = "Spaces will be replaced by underscore.";

  spanUsername.appendChild(inputUsername);
  spanUsername.appendChild(labelUsername);
  spanUsername.appendChild(smallUsername);

  const spanEmail = document.createElement('span');
  spanEmail.classList.add('input-container');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("placeholder", " ");
  inputEmail.setAttribute("autocomplete", "off");
  inputEmail.setAttribute("data-isvalid", "false");
  inputEmail.addEventListener('input', () => {
    verifSigninInput();
  });

  const labelEmail = document.createElement('label');
  labelEmail.setAttribute("for", "email");
  labelEmail.textContent = "Email *";

  const smallEmail = document.createElement('small');
  smallEmail.textContent = "";

  spanEmail.appendChild(inputEmail);
  spanEmail.appendChild(labelEmail);
  spanEmail.appendChild(smallEmail);


  const spanPassword = document.createElement('span');
  spanPassword.classList.add('input-container');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("name", "password");
  inputPassword.setAttribute("id", "password");
  inputPassword.setAttribute("placeholder", " ");
  inputPassword.setAttribute("autocomplete", "off");
  inputPassword.setAttribute("data-isvalid", "false");
  inputPassword.addEventListener('input', () => {
    verifSigninInput();
  });

  const labelPassword = document.createElement('label');
  labelPassword.setAttribute("for", "password");
  labelPassword.textContent = "Password *";

  const smallPassword = document.createElement('small');
  smallPassword.textContent = "Password must contain at least 8 characters and at most 20 including at least one uppercase letter, one number and one special character.";

  spanPassword.appendChild(inputPassword);
  spanPassword.appendChild(labelPassword);
  spanPassword.appendChild(smallPassword);

  const spanRetypePassword = document.createElement('span');
  spanRetypePassword.classList.add('input-container');

  const inputRetypePassword = document.createElement('input');
  inputRetypePassword.setAttribute("type", "password");
  inputRetypePassword.setAttribute("name", "retypePassword");
  inputRetypePassword.setAttribute("id", "retypePassword");
  inputRetypePassword.setAttribute("placeholder", " ");
  inputRetypePassword.setAttribute("autocomplete", "off");
  inputRetypePassword.setAttribute("data-isvalid", "false");
  inputRetypePassword.addEventListener('input', () => {
    verifSigninInput();
  });

  const labelRetypePassword = document.createElement('label');
  labelRetypePassword.setAttribute("for", "retypePassword");
  labelRetypePassword.textContent = "Retype Password *";

  const smallRetypePassword = document.createElement('small');
  smallRetypePassword.textContent = " ";

  spanRetypePassword.appendChild(inputRetypePassword);
  spanRetypePassword.appendChild(labelRetypePassword);
  spanRetypePassword.appendChild(smallRetypePassword);

  const buttonSignin = document.createElement('button');
  buttonSignin.setAttribute('name', 'submit');
  buttonSignin.textContent = "Sign In";

  modalForm.appendChild(spanUsername);
  modalForm.appendChild(spanEmail);
  modalForm.appendChild(spanPassword);
  modalForm.appendChild(spanRetypePassword);
  modalForm.appendChild(buttonSignin);
  modal.insertBefore(modalForm, othersActions);
}
