const smallestCommons = arr => {
 
  arr.sort((a, b) => b > a);
  
  let max = arr[0];
  let min = arr[1];
  let multiple = max;
  
  for (let i = max; i >= min; i--){
    if (multiple % i !== 0){
      multiple += max; 
      i = max;
      } 
    }
    
    return multiple;  
  };
