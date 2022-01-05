var generateBtn = document.querySelector("#generate");
// here I have the main function that will start when user clicks on "Generate Password" button
var generatePassword = function() {
  // ask question to see how many characters needed
  var passwordLength = window.prompt("How many characters would you like your password to contain? (Password length must be at least 8 characters and no more than 128 characters!)");
  passwordLength = parseInt(passwordLength);
  // the number has to be between 8 to 128 and only numbers are accepted
  if (passwordLength >= 8 && passwordLength <= 128) {
  } else if (passwordLength < 8) {
    window.alert("Password length must be at least 8 characters!");
    return generatePassword();
  } else if (passwordLength > 128) {
    window.alert("Password length must be no more than 128 characters!");
    return generatePassword();
  } else if (passwordLength === "" || passwordLength === null) {
    window.alert("Password length must be provided as a number!");
    return generatePassword();
  } else {
    window.alert("Password length must be provided as a number!");
    return generatePassword();
  };
  // here determine the password ceriteria
  var special = window.confirm("Click OK to confirm including special characters.");
  if (special) {
    special = false;
  } else {
    special = true;
  }
  var numeric = window.confirm("Click OK to confirm including numeric characters.");
  if (numeric) {
    numeric = false;
  } else {
    numeric = true;
  }
  var lowercase = window.confirm("Click OK to confirm including lowercase characters.");
  if (lowercase) {
    lowercase = false;
  } else {
    lowercase = true;
  }
  var uppercase = window.confirm("Click OK to confirm including uppercase characters.");
  if (uppercase) {
    uppercase = false;
  } else {
    uppercase = true;
  }
  // making sure at least one ceriteria is selected
  if (special & numeric & lowercase & uppercase) {
    window.alert("Must select at least one character type.");
    passwordLength = 0;
    return generatePassword();
  };
  // I used "HTML Encoding (Character Sets)" and the characters I need start at number 33 and are 94 characters in total, that's why my random number has to be between 33 to 126
  var randomNumber = function() {
    var number = Math.floor(Math.random() * 94) + 33;
    // if user does not want any special characters the math random output gets filtered and the randomNumber() starts over until an acceptable number is selected
    if (special) {
      if ((number >= 33 && number <= 47) || (number >= 58 && number <= 64) || (number >= 91 && number <= 96) || (number >= 123 && number <= 126)) {
        return randomNumber();
      }
    }
    // if user does not want any numeric characters the math random output gets filtered and the randomNumber() starts over until an acceptable number is selected
    if (numeric) {
      if ((number >= 48 && number <= 57)) {
        return randomNumber();
      }
    }// if user does not want any lowercase characters the math random output gets filtered and the randomNumber() starts over until an acceptable number is selected
    if (lowercase) {
      if ((number >= 97 && number <= 122)) {
        return randomNumber();
      }
    }
    // if user does not want any uppercase characters the math random output gets filtered and the randomNumber() starts over until an acceptable number is selected
    if (uppercase) {
      if ((number >= 65 && number <= 90)) {
        return randomNumber();
      }
    }
    return number;
  };
  // here the randomNumber() output gets plugged into the randomCharacters() to pick the character from the "HTML Encoding (Character Sets)"
  var randomCharacters = function() {
    var character = String.fromCharCode(randomNumber());
    return character;
  };  
  // this loop will repeat the last two functions until the password length requirement is met and store the result into pass
  var pass = "";
  for (var i = 0; i < passwordLength; i++) {
    pass += randomCharacters();
  }
  return pass;
};
// the finall pass coming from the generatePassword moves into the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);