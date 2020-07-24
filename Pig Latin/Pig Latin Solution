const translatePigLatin = str => {

  if (str.match(/^[aeiou]/)){
    return str + 'way';
  }
  
  var beginMatch = str.match(/^[^aeiou]+/g).join();
  var deleteFirst = str.slice(beginMatch.length);
  
  return deleteFirst + beginMatch + 'ay';
  
  };
