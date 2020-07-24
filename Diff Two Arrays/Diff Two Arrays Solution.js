const diffArray = (arr1, arr2) => {

  var filter1 = arr1.filter(element => !arr2.includes(element));
  var filter2 = arr2.filter(element => !arr1.includes(element));
  
  return filter1.concat(filter2);
  
  }; 

