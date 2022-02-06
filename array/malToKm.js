function milTokm(miles) {
  var km = miles * 1.609344;
  return km;
}
var miles = 20;
var milesTokm = milTokm(miles);

console.log("To the convart:", parseFloat(milesTokm), "KM");
