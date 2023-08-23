var characterLength = [];
var choiceArray = [];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","?","<",">","{","}","|","/"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var validPrompts = userPrompts();
  var passwordText = document.querySelector("#password");

// if i get correct prompts password will generate
  if (validPrompts) {
     var password = generatePassword();
      passwordText.value = password;

    //returns blank  
  } else {
      passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password function
function generatePassword() {
  var genPass = "";

  for (var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArray.length);
      genPass = genPass + choiceArray[randomIndex];
  }
  return genPass;
}


function userPrompts() {
    choiceArray = [];
    //character length prompt
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
    if (confirm("Do you want to use numbers in your password?")) {
      choiceArray = choiceArray.concat(numericChar);
    }

    //asks for special character prompt
    if (confirm("Do you want to use special characters in your password?")) {
      choiceArray = choiceArray.concat(specialChar);
    }
    return true;

  }