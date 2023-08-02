const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const usernameErrorContainer = document.querySelector(".username-errors");
const passwordErrorContainer = document.querySelector(".password-errors");
const errorContainer = document.querySelectorAll(".error-container");
const usernameErrors = {
  caseError: `<p class="error">* username must be lowercase</p>`,
  lengthError: `<p class="error">* username must be atlest 4 character long</p>`,
  specialCharacterError: `<p class="error">* no special character allowed other than underscore</p>`,
  spaceError: `<p class="error">* username can't contain spaces</p>`,
  allUnderScoreError: `<p class="error">* every characters can't be underscore</p>`,
};
const passwordErrors = {
  lowerCaseError: `<p class="error">* password must have 1 lowercase character</p>`,
  upperCaseError: `<p class="error">* password must have 1 uppercase character</p>`,
  lengthError: `<p class="error">* username must be atlest 8 character long</p>`,
  specialCharacterError: `<p class="error">* must have 1 special character</p>`,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorContainer.forEach((el) => (el.innerHTML = ""));
  validateUsername(username.value);
  validatePassword(password.value);
});

function isLowerCase(str) {
  return str === str.toLowerCase();
}

function hasSpace(str) {
  return str.includes(" ");
}

function hasRequiredLen(str, len) {
  return str.length >= len;
}

function allUnderScore(str) {
  const strArr = str.split("");
  return strArr.every((el) => el === "_");
}

function containsSpecialCharacters(str) {
  const regex = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
}

function hasLowerCase(str) {
  return /[a-z]/.test(str);
}
function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
function hasSpecialCharacters(str) {
  const regex = /[!@#$%^&_*()+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
}

function validateUsername(str) {
  if (!isLowerCase(str)) errorThrower("username", usernameErrors.caseError);
  if (hasSpace(str)) errorThrower("username", usernameErrors.spaceError);
  if (!hasRequiredLen(str, 4))
    errorThrower("username", usernameErrors.lengthError);
  if (allUnderScore(str))
    errorThrower("username", usernameErrors.allUnderScoreError);
  if (containsSpecialCharacters(str))
    errorThrower("username", usernameErrors.specialCharacterError);
}

function validatePassword(str) {
  if (!hasLowerCase(str))
    errorThrower("password", passwordErrors.lowerCaseError);
  if (!hasUpperCase(str))
    errorThrower("password", passwordErrors.upperCaseError);
  if (!hasSpecialCharacters(str))
    errorThrower("password", passwordErrors.specialCharacterError);
  if (!hasRequiredLen(str, 8))
    errorThrower("password", passwordErrors.lengthError);
}

function errorThrower(field, str) {
  if (field === "username") {
    usernameErrorContainer.insertAdjacentHTML("afterbegin", str);
  }
  if (field === "password") {
    passwordErrorContainer.insertAdjacentHTML("afterbegin", str);
  }
}
