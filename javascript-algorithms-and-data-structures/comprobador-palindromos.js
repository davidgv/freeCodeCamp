//
// Comprobador de palíndromos
// (ignorando puntuación, mayúsculas, minúsculas y espaciado)
//

function palindrome(str) {
  
  // Limpiamos la cadena
  let arrLimpia = "";
  for (let i=0; i<str.length; i++) {
    if ( str[i].match(/[a-zA-Z0-9]/) ) arrLimpia += str[i].toLowerCase();
  }

  // Comprobamos si es palíndromo
  let esPali = true;
  let i = 0; // contador de subida
  let j = arrLimpia.length-1; // contador de bajada
  do {
    if ( arrLimpia[i] != arrLimpia[j] ) esPali=false;
    i++;
    j--;
  } while (i<j);

  return esPali;
}

console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
