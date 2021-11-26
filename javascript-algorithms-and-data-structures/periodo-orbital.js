//
// Cálculo del período orbital de diferentes satélites orbitando la Tierra: https://es.wikipedia.org/wiki/Per%C3%Adodo_orbital
//

function orbitalPeriod(arr) {

  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let name, avgAlt, orbitalPeriod, arrReturn=[];

  arr.forEach( obj => {
    name = obj.name;
    avgAlt = obj.avgAlt;
    orbitalPeriod = Math.round(2*Math.PI*Math.sqrt((earthRadius+avgAlt)**3/GM));
    arrReturn.push( {"name": name, "orbitalPeriod": orbitalPeriod} );
  })

  return (arrReturn);
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
