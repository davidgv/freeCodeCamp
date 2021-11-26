//
// Cifrado ROT13 (variante de cifrado César)
// https://es.wikipedia.org/wiki/ROT13
//

function rot13(strIn) {
  // ASCII codes
  // a(97) m(109) n(110) z(122) A(65) M(77) N(78) Z(90)

  let strOut="";
  let asciiTmp;

  for (let i=0; i<strIn.length; i++) {
    asciiTmp = strIn.charCodeAt(i);
    if ( (asciiTmp>=97) && (asciiTmp<=109) ) strOut += String.fromCharCode(asciiTmp+13); // a-m => n-z
    else if ( (asciiTmp>=110) && (asciiTmp<=122) ) strOut += String.fromCharCode(asciiTmp-13); // n-z => a-m
    else if ( (asciiTmp>=65) && (asciiTmp<=77) ) strOut += String.fromCharCode(asciiTmp+13); // A-M => N-Z
    else if ( (asciiTmp>=78) && (asciiTmp<=90) ) strOut += String.fromCharCode(asciiTmp-13); // N-Z => A-M
    else strOut += strIn[i]; // sin cambio
  }

  return strOut;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
