// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLow = 'abcdefghijklmnopqrstuvwxyz';
var charCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var characters = prompt("How many characters would you like to use?");
var capital = confirm("Would you like capital letters?");
var lower = confirm("Would you like lowercase letters?");
var numbers = confirm("Would you like numbers?");
var symbols = confirm("Would you like symbols?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = characters.value,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
passwordText.value = retVal;
}
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
