function leapYear(year) {
  if (year % 4 == 0) {
    console.log("This year is leapYear");
  } else {
    console.log("This year is not leapYear");
  }
  return year;
}
const runingYear = 2022;
const checkLeapYear = leapYear(runingYear);
console.log(checkLeapYear);
