// var num1 = 500;
// var num2 = 4000;
// var num3 = 300;
// var maths = Math.max(num1, num2, num3);
// console.log(maths);
function largestNumber(number1, number2, number3) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number3) {
    return number2;
  } else {
    return number3;
  }
}
let largestValue = largestNumber(300, 5000, 4000); //three number can you check largestNumber ?
console.log("largest number is :", largestValue);
function smallestNumber(number1, number2, number3) {
  if (number1 < number2) {
    return number1;
  } else if (number2 < number3) {
    return number2;
  } else {
    return number3;
  }
}
let smalValue = smallestNumber(300, 5000, 4000); //three number can you check smallestNumber ?
console.log("smallest number is :", smalValue);
