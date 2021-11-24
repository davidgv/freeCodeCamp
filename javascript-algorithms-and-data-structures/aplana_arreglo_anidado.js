//
// Aplana un arreglo anidado ( sin utilizar Array.flat() ni Array.flatMap() )
//

function steamrollArray(arr) {
  let arr2=[];

  let profundizar = arr => {
    for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) profundizar(arr[i]);
      else arr2.push(arr[i]);
    }
  }
  profundizar(arr);
  
  return arr2;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
