function gradeSystem(masks) {
  if (masks >= 80) {
    return "Outstanding A+";
  } else if (masks >= 75) {
    return "Excellent A";
  } else if (masks >= 70) {
    return "Very Good A-";
  } else if (masks >= 65) {
    return "Good B+";
  } else if (masks >= 60) {
    return "Satisfactory B ";
  } else if (masks >= 55) {
    return "Above Average B-";
  } else if (masks >= 50) {
    return "Average C+";
  } else if (masks >= 45) {
    return "Bellow Average C";
  } else if (masks >= 40) {
    return "Pass D";
  } else {
    return "Fail F";
  }
}
const inputMasks = gradeSystem(79);
console.log(inputMasks);
