// const number = 1;
// if (number >= 0) {
//   console.log("positive");
// } else if (number <= 0) {
//   console.log("negtive");
// } else {
//   console.log("zero");
// }

function seller(singar, piazu, pori) {
  var singarPices = singar * 7;
  var piazuPices = piazu * 10;
  var poriPices = pori * 5;
  var totalSellEveryday = singarPices + piazuPices + poriPices;
  return totalSellEveryday;
}
var daliySell = seller(10, 5, 4);
console.log(daliySell);
