//
// Devuelve la diferencia simétrica (elementos que solo están en uno u otro) entre dos arreglos
//

function diffArray(arr1, arr2) {
  const newArr = [];

    arr1.forEach(elementA1 => {
      if (arr2.every(elementA2 => elementA1 != elementA2)) newArr.push(elementA1);
    });

    arr2.forEach(elementA2 => {
      if (arr1.every(elementA1 => elementA2 != elementA1)) newArr.push(elementA2);
    });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 15], [1, 2, 3, 4, 5]));
