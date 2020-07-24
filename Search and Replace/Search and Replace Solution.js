const myReplace = (str, before, after) => {

  if (before.match(/[A-Z]/)){
    return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
  }
  
  return str.replace(before,after);
  
  };

