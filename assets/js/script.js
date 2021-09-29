// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  // passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
    password = "a password length";
    return password;
  } else if (passwordLength < 8) {
    console.log(passwordLength);
    window.alert("Password length must be at least 8 characters!");
    generatePassword();
  } else if (passwordLength > 128) {
    console.log(passwordLength);
    window.alert("Password length must be no more than 128 characters!");
    generatePassword();
  } else {
    window.alert("Password length must be provided as a number!");
    generatePassword();
  }
};

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);