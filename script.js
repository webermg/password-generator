// Assignment Code
var generateBtn = document.querySelector("#generate");
let checkboxes = document.querySelectorAll(".checkbox");

let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  let datasets = gatherDatasets();
  let passLength = document.getElementById("lengthInput").value;
  var password = generatePassword(datasets, passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates a password based on the criteria specified
const generatePassword = (datasets, passLength) => {
  let password = "";
  for(let i = 0; i < passLength; i++) {
    let setNum = Math.floor(Math.random() * datasets.length);
    let charNum = Math.floor(Math.random() * datasets[setNum].length);
    password += datasets[setNum][charNum];
  }
  return password;
};

const gatherDatasets = () => {
  let datasets = [];
  if(document.getElementById("lowercaseCB").checked) datasets.push(lowerCaseChars);
  if(document.getElementById("uppercaseCB").checked) datasets.push(upperCaseChars);
  if(document.getElementById("numberCB").checked) datasets.push(numbers);
  if(document.getElementById("specialCharCB").checked) datasets.push(specialChars);
  return datasets;
};

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