    // Assignment Code
var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    //character choices
const type_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

    //prompts
function generatePassword() {

  var passwordOptions = "";

  var length = window.prompt("How many characters do you want your password to be");
  if (length < 8 || length > 128){
    alert("Password must be 8-128 characters")
    return
  };

  var lowercase = window.confirm("Do you want to use lowercase letters?");
  if (lowercase) {
    passwordOptions += type_strings.lowercase;
  };

  var uppercase = window.confirm("Do you want to use uppercase letters?");
  if (uppercase) {
    passwordOptions += type_strings.uppercase;
  };

  var symbols = window.confirm("Do you want to use symbols?");
  if (symbols) {
    passwordOptions += type_strings.symbol;
  };

  var numbers = window.confirm("Do you want to use numbers?");
  if (numbers) {
    passwordOptions += type_strings.number;
  };

  if (lowercase != true && uppercase != true && symbols != true && numbers != true){
    alert("At least one character type is required")
}

      //randomize characters
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
  }
  return password;
}

console.log(generatePassword());