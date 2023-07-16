// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var number;
var upperCase;
var lowerCase;
var character;
//  b. Lowercase, uppercase, special characters, numbers

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H"];

//combine to be used to concate 
var combine;

//Booleans ????
// var number= true;
// var character= true;
// var lowerCase= true;
// var upperCase= true;



//Function to generate password
function generatePassword() {
  console.log("Button Clicked");


  //1. Prompt the user for the password criteria.
  //  a. Password length 8 < 128

  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128."));

  if (!enter) {
    alert ("Please enter a value");
  } 
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose a number between 8 and 128"));
  }
  else {
    number = confirm ("Click OK to include numbers.");
    upperCase = confirm ("Click OK to include Uppercase letters.");
    lowerCase = confirm("Click OK to include Lowercase letters.");
    character= confirm("Click OK to include special characters.");
  };

  if (!number && !upperCase && !lowerCase && !character) {
    combine = alert("You must choose a criteria!");
  }

  else if (number && upperCase && lowerCase && character) {
    combine = number(character, lowerCase, upperCase);
  }

  else if (number && upperCase && lowerCase){
    combine = number(lowerCase + upperCase);
  }

  
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




for (var i = 0; i < enter; i++){
console.log (number[(Math.floor(Math.random() * number.length))]);
console.log(lowerCase[(Math.floor(Math.random() * lowerCase.length))]);
console.log(upperCase[(Math.floor(Math.random() * upperCase.length))]);
console.log(character[(Math.floor(Math.random() * number.length))]);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
