var generateBtn = document.querySelector("#generate");

var randomNumber = function() {
  var value = Math.floor(Math.random() * 94) + 33;
  // console.log(value);
  return value;
};

var randomCharacters = function() {
  var value = String.fromCharCode(randomNumber());
  // console.log(value);
  return value;
};

var passwordLength = function() {
  var value = window.prompt("How many characters would you like your password to contain?");
  value = parseInt(value);
  if (value >= 8 && value <= 128) {
    // console.log("The password's length is " + value);
  } else if (value < 8) {
    window.alert("Password length must be at least 8 characters!");
    return passwordLength();
  } else if (value > 128) {
    window.alert("Password length must be no more than 128 characters!");
    return passwordLength();
  } else if (value === "" || value === null) {
    window.alert("Password length must be provided as a number!");
    return passwordLength();
  } else {
    window.alert("Password length must be provided as a number!");
    return passwordLength();
  }
  return value;
};

var specialCharacters = function() {
  var value = window.confirm("Click OK to confirm including special characters.");
  return value;
};

var numericCharacters = function() {
  var value = window.confirm("Click OK to confirm including numeric characters.");
  return value;
};

var lowercaseCharacters = function() {
  var value = window.confirm("Click OK to confirm including lowercase characters.");
  return value;
};

var uppercaseCharacters = function() {
  var value = window.confirm("Click OK to confirm including uppercase characters.");
  return value;
};

var passwordType = function() {
  if (specialCharacters()) {
    // console.log("SC");
    var special = true;
  }
  if (numericCharacters()) {
    // console.log("NC");
    var numeric = true;
  }
  if (lowercaseCharacters()) {
    // console.log("LC");
    var lowercase = true;
  }
  if (uppercaseCharacters()) {
    // console.log("UC");
    var uppercase = true;
  }
  if (special || numeric || lowercase || uppercase) {
    var value = randomCharacters();
    // console.log(value);
  } else {
    console.log("Error");
    window.alert("Must select at least one character type.");
  }
  return value;
};

var generatePassword = function() {
  var passLength = passwordLength();
  passLength = parseInt(passLength);
  // console.log(passLength);
  passwordType();
  var value = "";
  for (var i = 0; i < passLength; i++) {
    // console.log(randomCharacters());
    value += randomCharacters();
  }
  console.log(value);
  return value;
};

// Write password to the #password input
function writePassword() {
  // generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);