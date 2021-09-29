var generateBtn = document.querySelector("#generate");

var passwordLength = function() {
  var value = window.prompt("How many characters would you like your password to contain?");
  value = parseInt(value);
  if (value >= 8 && value <= 128) {
    console.log("The password's length is " + value);
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

var generatePassword = function() {
  var passLength = passwordLength();
  console.log(passLength);
  if (specialCharacters()) {
    console.log("SC");
    var special = true;
  }
  if (numericCharacters()) {
    console.log("NC");
    var numeric = true;
  }
  if (lowercaseCharacters()) {
    console.log("LC");
    var lowercase = true;
  }
  if (uppercaseCharacters()) {
    console.log("UC");
    var uppercase = true;
  }
  if (special || numeric || lowercase || uppercase) {
    console.log("Password");
    return "Password";
  } else {
    console.log("Error");
    window.alert("Must select at least one character type.");
  }  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);