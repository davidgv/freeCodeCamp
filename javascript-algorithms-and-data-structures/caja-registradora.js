//
// CAJA REGISTRADORA
// Calcula la devolución al cliente, dado el precio de compra (price), la cantidad pagada (cash) y el dinero encaja (cid).
//

function checkCashRegister(price, cash, cid) {
  // price: precio de venta
  // cash: precio pagado
  // cid: dinero en la caja

  const valorMoneda = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  const devolTotal = cash - price; // total a devolver (inicialmente)
  let devolPend = devolTotal; // pendiente por devolver (durante el cálculo)
  let restoCaja = 0; // al final, muestra el resto que queda en caja
  let devolFinal = []; // array con la devolución final al cliente
  let disponible; // disponible en caja para cada moneda
  
  for (let i=8; i>=0; i--) { // recorremos cid del valor mayor (100) al menor (0.01)
    let disponible = cid[i];
    restoCaja = Number.parseFloat((restoCaja + disponible[1]).toFixed(2)); // suma todo lo disponible para esa moneda, luego resta lo sustraido
    if ( (devolPend >= disponible[1]) && (disponible[1] > 0) ) {
      if ( (i==0) && (devolPend > disponible[1]) ) {
// CASO 1: no tenemos suficiente cambio en total
        return {"status": "INSUFFICIENT_FUNDS", "change": []}
      }
// CASO 2: usamos toda la moneda en cid[i]
      devolFinal.push([disponible[0], disponible[1]]);
      restoCaja = Number.parseFloat((restoCaja - disponible[1]).toFixed(2));
      devolPend = Number.parseFloat((devolPend - disponible[1]).toFixed(2));
    }
    else if ( (devolPend < disponible[1]) && (devolPend > 0) && (valorMoneda[i][1] <= devolPend) ) {
      let resto = devolPend % valorMoneda[i][1];
      if (resto == 0) {
// CASO 3: usamos parte de la moneda en cid[i] y ya tenemos todo el cambio
        devolFinal.push([disponible[0], devolPend]);
        restoCaja = Number.parseFloat((restoCaja - devolPend).toFixed(2));
        devolPend = 0;
      } else { 
// CASO 4: usamos parte de la moneda en cid[i] y nos falta más cambio
        let max = Math.floor(devolPend / valorMoneda[i][1]) * valorMoneda[i][1]; // máximo pagable con esta moneda
        devolFinal.push([disponible[0], max]);
        restoCaja = Number.parseFloat((restoCaja - max).toFixed(2));
        devolPend = Number.parseFloat((devolPend - max).toFixed(2));
      }
    }
  }

  // para llegar aquí devolPend tiene que valer cero, sino habría salido en CASO 1
  if (restoCaja > 0) return {"status": "OPEN", "change": devolFinal};

  else { // devolFinal debe mostrar todas las monedas, ordenadas de menor a mayor
    let devolFinal2 = []; // array con devolFinal completo y reordenado
    for (let i=0; i<=8; i++) {
    // rellenamos devolFinal2 ordenado de menor a mayor, incorporando los valores de devolFinal
      devolFinal.some(array => {
        if (array[0] == valorMoneda[i][0]) devolFinal2.push(array); // valor de devolFinal
        else devolFinal2.push([valorMoneda[i][0], 0]); // valor a cero
      });
    }
    return {"status": "CLOSED", "change": devolFinal2};
  }

}


// SURTIDO DE CASOS DE PRUEBA

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(checkCashRegister(19.5, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(checkCashRegister(1, 50, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
