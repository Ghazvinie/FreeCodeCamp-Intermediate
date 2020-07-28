const orbitalPeriod = arr => {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
  arr.forEach(element => {
  
   element.orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt(((earthRadius + element.avgAlt) ** 3) / GM));
    
    delete element.avgAlt;
  });
    return arr;
  };
