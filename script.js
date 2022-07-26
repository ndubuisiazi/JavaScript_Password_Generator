
// Assignment Code
// setting variables and DOM elements
var generateBtn = document.querySelector("#generate");
let output = document.getElementById("password")
let newPW = ""

// Creating an object of function names to loop through
randFunction = {
  lowercase: randomLower,
  uppercase: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
}

// Function to make popup box visible by changing the display + add click event generate password
function writePassword(){ 
  document.getElementById("pscontainor").style.display="flex"
  let pwbutton = document.getElementById("generatepw")
  pwbutton.addEventListener("click", makePW) 
}

// Create function to generate password
function makePW(){
  newPW = ""
if(+document.getElementById("Char_lim").value >128 || +document.getElementById("Char_lim").value<8 ){
  alert("Please choose a value between 8 and 128")
} else{
  pwLength = +document.getElementById("Char_lim").value
  lowercase = Lower_Case.checked
  uppercase = Upper_Case.checked
  number = numeric.checked
  symbol = specChar.checked
  count = lowercase + uppercase + number + symbol
  countArray =[{lowercase}, {uppercase}, {number}, {symbol}].filter(
    item=> Object.values(item)[0])
    if(countArray < 1){ alert("Please select lowercase, uppercase, number or symbol")}{
  for(let i =0; i < pwLength; i += count){
    countArray.forEach(type => {
      const funchName = Object.keys(type)[0];
      newPW += randFunction[funchName]();
    });};
  document.getElementById("password").innerText= newPW;
  document.getElementById("pscontainor").style.display="none";}
}}


// function for random lowercase letters
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// function for random Uppercase letters
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)}

  // function for random numbers letters
  function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)}

  // function for random symbols letters
  function randomSymbol(){
  let symbols = '!@#$%^&*()[]<>'
  return symbols[Math.floor(Math.random() * symbols.length)]}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







