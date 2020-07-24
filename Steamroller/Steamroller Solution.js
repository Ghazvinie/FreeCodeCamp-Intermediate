const steamrollArray = arr => {

  for (let i = 0; i < arr.length; i++){
    arr = arr.reduce((current,next) => current.concat(next),[]);
   }
  return arr;
  };
