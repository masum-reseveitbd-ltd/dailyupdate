function getfactorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    //we can easy to get factional number 3,4,5,6,and so on.
    fact = fact * i;
  }
  return fact;
}
var result = getfactorial(7);
console.log(result);
