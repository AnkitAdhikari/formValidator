const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const usernameErrorContainer = document.querySelector(".username-errors");
const errorContainer = document.querySelectorAll(".error-container");
const usernameErrors = {
  caseError: `<p class="error">* username must be lowercase</p>`,
  lengthError: `<p class="error">* username must be atlest 4 character long</p>`,
  specialCharacterError: `<p class="error">* no special character allowed other than underscore</p>`,
  spaceError: `<p class="error">* username can't contain spaces</p>`,
  allUnderScoreError: `<p class="error">* every characters can't be underscore</p>`,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorContainer.forEach((el) => (el.innerHTML = ""));
  validateUsername(username.value);
});

function isLowerCase(str) {
  return str === str.toLowerCase();
}

function hasSpace(str) {
  return str.includes(" ");
}

function hasRequiredLen(str) {
  return str.length >= 4;
}

function allUnderScore(str) {
  const strArr = str.split("");
  return strArr.every((el) => el === "_");
}

function containsSpecialCharacters(str) {
  const regex = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
}

function validateUsername(str) {
  if (!isLowerCase(str)) errorThrower("username", usernameErrors.caseError);
  if (hasSpace(str)) errorThrower("username", usernameErrors.spaceError);
  if (!hasRequiredLen(str))
    errorThrower("username", usernameErrors.lengthError);
  if (allUnderScore(str))
    errorThrower("username", usernameErrors.allUnderScoreError);
  if (containsSpecialCharacters(str))
    errorThrower("username", usernameErrors.specialCharacterError);
}

function errorThrower(field, str) {
  if (field === "username") {
    usernameErrorContainer.insertAdjacentHTML("afterbegin", str);
  }
}
