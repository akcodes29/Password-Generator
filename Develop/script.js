// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Clicked");

  var password = "";

  var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var characterArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //combine to be used to concate 
  var combine = [];

 


  //Function to generate password


  //1. Prompt the user for the password criteria.
  //  a. Password length 8 < 128

  var length = prompt("How many characters would you like your password? Choose between 8 and 128.");


  if (length < 8 || length > 128) {
    alert("The length of your password must be between 8 and 128 characters. Please try again.");

  }

  //Prompts for password criteria
  else {
    var number = confirm("Click OK to include numbers.");
    var upperCase = confirm("Click OK to include Uppercase letters.");
    var lowerCase = confirm("Click OK to include Lowercase letters.");
    var character = confirm("Click OK to include special characters.");
  }


  console.log(numberArr[(Math.floor(Math.random() * numberArr.length))]);
  console.log(lowerCaseArr[(Math.floor(Math.random() * lowerCaseArr.length))]);
  console.log(upperCaseArr[(Math.floor(Math.random() * upperCaseArr.length))]);
  console.log(characterArr[(Math.floor(Math.random() * characterArr.length))]);

//Possible outcomes

  if (number) {
    combine = combine.concat(numberArr);
  }

  if (upperCase) {
    combine = combine.concat(upperCaseArr);
  }

  if (lowerCase) {
    combine = combine.concat(lowerCaseArr);
  }

  if (character) {
    combine = combine.concat(characterArr);
  }

  //Refractored the below code for what is seen above

  // if (!number && !upperCase && !lowerCase && !character) {
  //    alert("You must choose a criteria!");
  // }

  // else if (number && upperCase && lowerCase && character) {
  //   // for (var i = 0; i < length; i++){
  // combine = combine.concat(numberArr, characterArr, lowerCaseArr, upperCaseArr);
  //   // var com2 = Math.floor(Math.random() * combine.length);
  //   // password += com2.toString();}
  //   password += combine;
  // }

  // else if (number && upperCase && lowerCase){
  //   combine = combine.concat(numberArr, lowerCaseArr + upperCaseArr);
  //   password += combine;
  // }

  // else if (number && character && lowerCase){
  //   combine = combine.concat(numberArr, characterArr, lowerCaseArr);
  //   password += combine;
  // }

  // else if (number && character && upperCase){
  //   combine = combine.concat(numberArr, characterArr, upperCaseArr);
  //   password += combine;
  // }

  // else if (upperCase, lowerCase, character){
  //   combine = combine.concat(upperCaseArr, lowerCaseArr, characterArr);
  //   password += combine;
  // }

  // else if (upperCase && lowerCase){
  //   combine = combine.concat(upperCaseArr, lowerCaseArr);
  //   password += combine;
  // }

  // else if (number && character){
  //   combine = combine.concat(numberArr, characterArr);
  //   password += combine;
  // }

  // else if (number && upperCase){
  //   combine = combine.concat(numberArr, upperCaseArr);
  //   password += combine;
  // }

  // else if (number && lowerCase){
  //   combine = combine.concat(numberArr, lowerCaseArr);
  //   password += combine;
  // }

  // else if (character && upperCase){
  //   combine = combine.concat(characterArr, upperCaseArr);
  //   password += combine;
  // }

  // else if (character && lowerCase){
  //   combine = combine.concat(characterArr, lowerCaseArr);
  //   password += combine;
  // }

  // else if (character){
  //   combine = combine.concat(characterArr);
  //   password += combine;
  // }

  // else if (number){
  //   combine = combine.concat(numberArr);
  //   password += combine;
  // }

  // else if (upperCase){
  //   combine = combine.concat(upperCaseArr);
  //   password += combine;
  // }

  // else if (lowerCase){
  //   combine = combine.concat(lowerCaseArr);
  //   password += combine;
  // }

  //2. Validate the input. 
  //3. Generate password based on criteria.
  //4. Display the password on the page.

  var result = "" // this will be our final password
  for (var i = 0; i < length; i++) {
    result += combine[Math.floor(Math.random() * combine.length)];

  }

  return result;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


