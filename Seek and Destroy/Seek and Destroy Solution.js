const destroyer = arr => {

  let args  = Array.prototype.slice.call(arguments);
  
  return arr.filter(element => !args.includes(element));
  
  };
