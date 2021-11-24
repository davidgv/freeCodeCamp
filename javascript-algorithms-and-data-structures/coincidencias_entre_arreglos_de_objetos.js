//
// Crea una función que busque a través de un arreglo de objetos "collection" y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes con el segundo argumento "source". Cada par de nombre y valor del objeto "source" tiene que estar presente en el objeto de la colección, si se va a incluir en el arreglo devuelto.
//

function whatIsInAName(collection, source) {
  const arr = [];
  let arrValida;
  collection.forEach(objCol => {
    arrValida=[];
    for(let propSou in source) {
      if ( objCol.hasOwnProperty(propSou) ) {
        if ( objCol[propSou] == source[propSou] ) arrValida.push(true); // coinciden propiedad y valor
        else arrValida.push(false); // el valor de la propiedad no coincide
      } else arrValida.push(false); // no existe la propiedad en objCol
    }
    console.log(arrValida);
    if ( arrValida.every(valor => valor==true) ) arr.push(objCol);
  })
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
