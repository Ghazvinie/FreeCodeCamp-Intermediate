const sumFibs = num => {

  let numsArr = [0,1];
  
  for (let i = 2; i < num + 1; i++){
    numsArr.push(numsArr[i-2] + numsArr[i-1]);
    if (numsArr[numsArr.length - 1] > num){break;}
    }
  
  return numsArr
  .filter(element => element <= num && element % 2)
  .reduce((accum, curr) => accum + curr);
  
  };
