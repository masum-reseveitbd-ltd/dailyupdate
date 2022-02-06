const business = 440;
const minister = 500;
const army = 600;
if (business > minister && business > army) {
  console.log("business is bigger");
} else if (minister > business && minister > army) {
  console.log("minister is bigger");
} else if (army > business && army > minister) {
  console.log("army is bigger");
} else {
  console.log("there is not right any one..");
}
