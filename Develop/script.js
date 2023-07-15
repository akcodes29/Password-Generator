// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Clicked")

  //1. Prompt the user for the password criteria.
  //  a. Password length 8 < 128
  //  b. Lowercase, uppercase, special characters, numbers
  //2. Validate the input. 
  //3. Generate password based on criteria.

  
  //4. Display the password on the page.

  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
