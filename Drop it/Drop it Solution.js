const dropElements = (arr, func) => {

  arr = arr.slice(arr.indexOf(arr.find(element => func(element))));
  
  if (!func(...arr)){
    return [];
  }
  return arr;
  };
