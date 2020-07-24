const translatePigLatin = str => {

  if (str.match(/^[aeiou]/)){
    return str + 'way';
  }
  
  let beginMatch = str.match(/^[^aeiou]+/g).join();
  let deleteFirst = str.slice(beginMatch.length);
  
  return deleteFirst + beginMatch + 'ay';
  
  };
