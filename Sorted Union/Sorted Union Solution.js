const uniteUnique = (...arr) => {

  arr = [].concat(...arr);
  arr = [...new Set(arr)];
    
    return arr;
  
  };
