//
// Divide un arreglo "arr" en subarreglos de longitud "size", y los devuelve en un arreglo bidimensional
//

function chunkArrayInGroups(arr, size) {

  let numBucles = Math.ceil(arr.length/size);
  let arrFinal = [];
  let indexArr = 0;

  for (let i=0; i<numBucles; i++) {
    let subArr = [];
    for (let j=0; j<size; j++) {
      if (arr[indexArr] != undefined) subArr.push(arr[indexArr]);
      indexArr++;      
    }
    arrFinal.push(subArr);
  }

  return arrFinal;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
