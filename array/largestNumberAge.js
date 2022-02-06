function largestNumberAge(number) {
  let largest = 0;
  for (i = 0; i < number.length; i++) {
    let element = number[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const ages = [39, 45, 34, 23, 67];
const oldest = largestNumberAge(ages);
console.log("the oldest pepole her:", oldest);
