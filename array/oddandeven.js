// const number = 3;
// const reminder = number % 2;
// console.log(reminder == 0);

function oddAndEven(number) {
  const reminder = number % 2;
  if (number % 2 == 0) {
    console.log("this is number is even");
  } else {
    console.log("this is number is odd");
  }
  return reminder;
}
let checkNumber = 10;
let checkResult = oddAndEven(checkNumber);
console.log(checkResult);

// function oddAndEven(number) {
//     //   const reminder = number % 2;
//     if (number % 2 == 0) {
//       return true;
//     }
//     return;
//     false;
//   }
//   let checkNumber = 15;
//   let checkResult = oddAndEven(checkNumber);
//   console.log(checkResult);
