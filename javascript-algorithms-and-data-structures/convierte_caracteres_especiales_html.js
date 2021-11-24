//
// Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.
//

function convertHTML(str) {
  let newStr='';

   for (let i=0; i<str.length; i++) {
    switch (str[i]) {
      case "&":
        newStr += "&amp;";
        break;
      case "<":
        newStr += "&lt;";
        break;
      case ">":
        newStr += "&gt;";
        break;
      case "\"":
        newStr += "&quot;";
        break;
      case "'":
        newStr += "&apos;";
        break;
      default:
        newStr += str[i];
        break;
    }
  }

  return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
