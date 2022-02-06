// function anaToVori(ana) {
//   const vori = ana / 16;
//   return vori;
// }
// let totalVori = anaToVori(64);
// console.log(totalVori);

function animals(miles) {
  if (miles <= 10) {
    const animal = miles * 10;
    return animal;
  } else if (miles <= 20) {
    const first10Miles = 10 * 10;
    const restOfMiles = miles - 10;
    const second10Miles = restOfMiles * 50;
    const animal = first10Miles + second10Miles;
    return animal;
  } else {
    const first10Miles = 10 * 10;
    const secoand10Miles = 10 * 50;
    restOfMiles = miles - 20;
    const thirdRemingMiles = restOfMiles * 100;
    const animal = first10Miles + secoand10Miles + thirdRemingMiles;
    return animal;
  }
}

const totalAnimals = animals(21);
console.log(totalAnimals);
//  the forest if go 10 miles and each miles you will be see 10 animal can you check after go to 10 miles how many animal do you see ?
//  the forest if go 20 miles and each miles you will be see 50 animal can you check after go to 20 miles how many animal do you see ?
//  the forest if go 30 miles and each miles you will be see 100 animal can you check after go to 30 miles how many animal do you see ?
