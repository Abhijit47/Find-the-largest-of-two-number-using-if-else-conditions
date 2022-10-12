let num1;
let num2;
num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
function largest(a, b) {
  // No need to set up new variables, just use
  // the passed arguments - - they are function variables
  if (a > b) {
    return a + " is greater";
  } else {
    return b + " is greater";
  }
}
let showToUser = document.getElementsByClassName("askToUser")[0].innerHTML=largest(num1, num2);
console.log(showToUser);
