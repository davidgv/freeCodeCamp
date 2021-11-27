//
// Validador de números telefónicos de Estados Unidos
//

function telephoneCheck(str) {
  let expReg = /^(1[\s]?)?(([0-9]{3}|\([0-9]{3}\))[\s-]?[0-9]{3}[\s-]?[0-9]{4})$/;
  if ( str.search(expReg) != -1 ) return true;
  else return false;
}

// true
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1(555)555-5555"));

// false
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
