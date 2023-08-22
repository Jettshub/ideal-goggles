/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/
// Assignment code here

//length 8-128 characters

//prompt for lowercase

//prompt for uppercase

//prompt for numeric

//prompt for special characters
var characterLength = 8-128;
var choiceArray = [];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","?","<",">","{","}","|","/"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {


}

//character length prompt
function userPrompts() {
    characterLength = parseInt(prompt("Choose the amount of characters for your password (8 - 128)"));
    //is not a number prompt
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Please choose a number between 8 and 128 characters");
      return false;
    }
    //asks for lower case prompt
    if (confirm("Do you want to use lower case letters in your password?")) {
      choiceArray = choiceArray.concat(lowerCase);
    }
    //asks for upper case prompt
    if (confirm("Do you want to use upper case letters in your password?")) {
      choiceArray = choiceArray.concat(upperCase);
    }
    //asks for numbers prompt
    if (confirm("Do you want to use numbers letters in your password?")) {
      choiceArray = choiceArray.concat(numericChar);
    }
    //asks for special character prompt
    if (confirm("Do you want to use special characters in your password?")) {
      choiceArray = choiceArray.concat(specialChar);
    }
    return true;

  }