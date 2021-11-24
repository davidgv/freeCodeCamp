// Ordena un array de números sin usar sort() para no modificar el original (según prog. funcional)


const globalArray = [5, 6, 3, 2, 9];
console.log(globalArray);

function nonMutatingSort(arr) {
  return arr.slice(0).sort((a,b)=>a-b);
  // También valdría: return arr.concat().sort((a,b)=>a-b);
}

console.log(nonMutatingSort(globalArray));
