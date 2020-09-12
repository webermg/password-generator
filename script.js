// Assignment Code
const generateBtn = document.querySelector("#generate");
const checkboxes = document.querySelectorAll(".checkbox");

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  const datasets = gatherDatasets();
  const passLength = document.getElementById("lengthInput").value;
  const password = generatePassword(datasets, passLength);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates a password based on the criteria specified
const generatePassword = (datasets, passLength) => {
  let password = [];
  //to ensure that every character is present
  //add one of each selected to the beginning, then shuffle end result
  for(let i = 0; i < datasets.length; i++) {
    const charNum = Math.floor(Math.random() * datasets[i].length);
    password.push(datasets[i][charNum]);
  }
  for(let i = datasets.length; i < passLength; i++) {
    const setNum = Math.floor(Math.random() * datasets.length);
    const charNum = Math.floor(Math.random() * datasets[setNum].length);
    password.push(datasets[setNum][charNum]);
  }
  shuffle(password);
  return stringify(password);
};

//returns collection of datasets indicated by user preferences
const gatherDatasets = () => {
  let datasets = [];
  if(document.getElementById("lowercaseCB").checked) datasets.push(lowerCaseChars);
  if(document.getElementById("uppercaseCB").checked) datasets.push(upperCaseChars);
  if(document.getElementById("numberCB").checked) datasets.push(numbers);
  if(document.getElementById("specialCharCB").checked) datasets.push(specialChars);
  return datasets;
};

//shuffles all entries in an array
const shuffle = (arr) => {
  for(let i = arr.length-1; i >= 0; i--) {
    const other = Math.floor(Math.random() * i);
    const temp = arr[other];
    arr[other] = arr[i];
    arr[i] = temp;
  }
};

//takes an array and returns a string concatenating all the entries
const stringify = (arr) => {
  let result = "";
  for(let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
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