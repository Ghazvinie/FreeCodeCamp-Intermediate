const fearNotLetter = str => {

  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  if (str === alpha){
    return undefined;
  }
  
  alpha = alpha.slice(alpha.indexOf(str[0]));
  
  for (let i = 0; i < str.length; i++){
    if (str.charAt(i) !== alpha[i]){
      return alpha[i];
    }
   }
  };
