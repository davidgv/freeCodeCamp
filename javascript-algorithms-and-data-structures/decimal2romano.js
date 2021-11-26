//
// Conversor de números romanos
// (decimal 0-4999 a romano)
//

function convertToRoman(num) {
  if ( (num<1) || (num>3999) ) return "Fuera de rango";

  let romano="";

  let n1000 = Math.floor(num/1000);
  let n100 = Math.floor((num-(n1000*1000))/100);
  let n10 = Math.floor((num-(n1000*1000)-(n100*100))/10);
  let n1 = Math.floor(num-(n1000*1000)-(n100*100)-(n10*10));

  // 1000-3999
  for (let i=1; i<=n1000; i++) { romano += "M"; }

  // 100-999
  if (n100<=3) { for (let i=1; i<=n100; i++) romano += "C"; }
  else if (n100==4) romano += "CD";
  else if (n100==5) romano += "D";
  else if ( (n100>5) && (n100<9) ) { 
    romano += "D";
    for (let i=1; i<=(n100-5); i++) romano += "C";
  }
  else if (n100==9) romano += "CM";
  
  // 10-99
  if (n10<=3) { for (let i=1; i<=n10; i++) romano += "X"; }
  else if (n10==4) romano += "XL";
  else if (n10==5) romano += "L";
  else if ( (n10>5) && (n10<9) ) { 
    romano += "L";
    for (let i=1; i<=(n10-5); i++) romano += "X";
  }
  else if (n10==9) romano += "XC";
  
  // 1-10
  if (n1<=3) { for (let i=1; i<=n1; i++) romano += "I"; }
  else if (n1==4) romano += "IV";
  else if (n1==5) romano += "V";
  else if ( (n1>5) && (n1<9) ) { 
    romano += "V";
    for (let i=1; i<=(n1-5); i++) romano += "I";
  }
  else if (n1==9) romano += "IX";

  return romano;
 }

console.log(convertToRoman(2021));
console.log(convertToRoman(3699));
console.log(convertToRoman(36));
console.log(convertToRoman(649));
console.log(convertToRoman(2684));
console.log(convertToRoman(0));
console.log(convertToRoman(9999));
