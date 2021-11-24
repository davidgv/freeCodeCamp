// La función devuelve un arreglo conteniendo los cuadrados de los enteros positivos


let arr = [-3, 4.8, 5, 3, -3.2];

const squareListM1 = arr => { // Método 1
  arr = arr.filter(element => Number.isInteger(element)&&(element>0) );
  arr = arr.map(element => element*element);
  return arr;
};

const squareListM2 = arr => { // Método 2 (igual que el anterior, pero concentrado en una línea)
  return arr.filter(element => Number.isInteger(element)&&(element>0) ).map(element => element*element);
}

console.log(arr);
console.log(squareListM1(arr));
console.log(squareListM2(arr));
