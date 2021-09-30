var generateBtn = document.querySelector("#generate");

var passwordLength = function() {
  var value = window.prompt("How many characters would you like your password to contain?");
  value = parseInt(value);
  // if (value >= 8 && value <= 128) {
  //   // console.log("The password's length is " + value);
  // } else if (value < 8) {
  //   window.alert("Password length must be at least 8 characters!");
  //   return passwordLength();
  // } else if (value > 128) {
  //   window.alert("Password length must be no more than 128 characters!");
  //   return passwordLength();
  // } else if (value === "" || value === null) {
  //   window.alert("Password length must be provided as a number!");
  //   return passwordLength();
  // } else {
  //   window.alert("Password length must be provided as a number!");
  //   return passwordLength();
  // }
  return value;
};

var passwordType = function() {
  var special = window.confirm("Click OK to confirm including special characters.");
  if (special) {
    special = false;
    console.log(special);
  } else {
    special = true;
    console.log(special);
  }
  var numeric = window.confirm("Click OK to confirm including numeric characters.");
  if (numeric) {
    numeric = false;
    console.log(numeric);
  } else {
    numeric = true;
    console.log(numeric);
  }
  var lowercase = window.confirm("Click OK to confirm including lowercase characters.");
  if (lowercase) {
    lowercase = false;
    console.log(lowercase);
  } else {
    lowercase = true;
    console.log(lowercase);
  }
  var uppercase = window.confirm("Click OK to confirm including uppercase characters.");
  if (uppercase) {
    uppercase = false;
    console.log(uppercase);
  } else {
    uppercase = true;
    console.log(uppercase);
  }
  if (special & numeric & lowercase & uppercase) {
    console.log("Error");
    window.alert("Must select at least one character type.");
  } else {
    console.log("Good");
  }
};

var randomNumber = function() {
  var value = Math.floor(Math.random() * 94) + 33;
  // console.log(value);
  // if () {
  //   if ((value >= 33 && value <= 47) || (value >= 58 && value <= 64) || (value >= 91 && value <= 96) || (value >= 123 && value <= 126)) {
  //     return randomNumber();
  //   }
  // }
  return value;
};

var randomCharacters = function() {
  var value = String.fromCharCode(randomNumber());
  // console.log(value);
  return value;
};

var generatePassword = function() {
  var passLength = passwordLength();
  passLength = parseInt(passLength);
  // passwordType();
  var value = "";
  for (var i = 0; i < passLength; i++) {
    value += randomCharacters();
  }
  console.log(value);
  return value;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);