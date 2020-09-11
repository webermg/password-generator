// Assignment Code
var generateBtn = document.querySelector("#generate");
let checkboxes = document.querySelectorAll(".checkbox");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Verifies that at least one checkbox is checked and disables the button if none are
const verifyFormValidity = () => {
  let atLeastOneChecked = false;
  checkboxes.forEach(element => {
    if(element.checked) atLeastOneChecked = true;
  })
  if(atLeastOneChecked) generateBtn.disabled = false;
  else generateBtn.disabled = true;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to checkboxes
checkboxes.forEach(element => {
  element.addEventListener("click", verifyFormValidity)
});