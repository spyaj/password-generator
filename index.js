function getLower() {
  let lowerAlpha = "";
  for (i = 0; i < 26; i++) {
    lowerAlpha += String.fromCharCode(i + 97);
  }
  return lowerAlpha;
}
function getUpper() {
  let upperAlpha = "";
  for (i = 0; i < 26; i++) {
    upperAlpha += String.fromCharCode(i + 65);
  }
  return upperAlpha;
}


function getNumber() {
  let number = "";
  for (i = 0; i < 10; i++) {
    number += +String.fromCharCode(i + 48);
  }
  return number;
}


function getSymbol() {
  const symbol = "!@#$%^&*(){}[]=<>/,.";
  return symbol;
}



let generateBtn = document.getElementById("generate-btn");
let passwordTxtOne = document.getElementById("password-txt-one");
let passwordTxtTwo = document.getElementById("password-txt-two");
const length = document.getElementById("length");
const incSymbols = document.getElementById("symbols");
const incNumbers = document.getElementById("numbers");

const passwordGenerator = function (length, characters) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

generateBtn.addEventListener("click", () => {
  let characters = getLower() + getUpper();
  incNumbers.checked ? (characters += getNumber()) : "";
  incSymbols.checked ? (characters += getSymbol()) : "";
  passwordTxtOne.value = passwordGenerator(length.value, characters);
  passwordTxtTwo.value = passwordGenerator(length.value, characters);
  copiedTxt.textContent = `Hope you are having a great day.❤️ `
});


const copyBtnFirst = document.getElementById("copyOne");
const copyBtnSecond = document.getElementById("copyTwo");
const copiedTxt = document.getElementById("copied-txt");

copyBtnFirst.addEventListener("click", () => {
  if(passwordTxtOne.value === ""){
    copiedTxt.textContent = `Password feild is empty. Generate password first.`
  }else{
    passwordTxtOne.select();
    document.execCommand("copy");
    copiedTxt.textContent = `First Password Copied! Have a great day ❤️`
  }
});
copyBtnSecond.addEventListener("click", () => {
  if(passwordTxtTwo.value === ""){
    copiedTxt.textContent = `Password feild is empty. Generate password first.`
  }else{
    passwordTxtTwo.select();
    document.execCommand("copy");
    copiedTxt.textContent = `Second Password Copied! Have a great day ❤️`
  }
});
