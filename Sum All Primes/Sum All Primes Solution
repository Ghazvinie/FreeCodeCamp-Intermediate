const sumPrimes = num => {

  let numsArr = [];
  
  for (let i = 0; i < num + 1; i++){
    numsArr.push(i);
    }

  return numsArr
  .filter(element => {if (element < 2) return false;
    for (let i = 2; i < element; i++) {
        if (element % i == 0)
            return false;
    }
    return true;
  })
  .reduce((a, b) => a + b);
  
  };
