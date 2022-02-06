function validationEmail(email) {
  var checker = isNaN(email);
  return checker;
}

var emailId = validationEmail(0000);
console.log(emailId);
