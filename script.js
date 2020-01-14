// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = 'abcdefghijklmnopqrstuvwxyz';
var charCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var charNum = document.getElementById("#charNum");
var capBox = document.getElementById("#cap");
var numBox = document.getElementById("#num");
var symBox = document.getElementById("#sym");
var submit = document.getElementById("#generate");
var yourPw = document.getElementById("#yourPw");

// Write password to the #password input
function password(l, characters) {
  var pwd = '';
  for(var i = 0; i<l; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}


  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
submit.addEventListener("click", function(e){
  var characters = char;
  (capBox.checked) ? characters += charCap : '';
  (numBox.checked) ? characters += num : '';
  (symBox.checked) ? characters += sym : '';
  yourPw.value = password(charNum.value, characters);
});

// BONUS EVENT LISTENER
