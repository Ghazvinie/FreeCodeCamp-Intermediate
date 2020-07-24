const whatIsInAName = (collection, source) => {

  let arr = [];
  let key = Object.keys(source);
  let value = Object.values(source);
  
  for (let i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(key[0])){
      if (collection[i][key[0]] === value[0]){
        if (collection[i][key[1]] === value[1]){
          arr.push(collection[i]);
        }
      }
    }
  }
    return arr;
  };
