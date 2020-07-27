function addTogether () {

    if (!Number.isInteger(arguments[0]) || arguments[1] && !Number.isInteger(arguments[1])){
    
      return undefined;
    
    }else if (arguments.length < 2) {
    
      let arg1 = arguments[0];
      
      return arg2 => {
        if (!Number.isInteger(arg1) || !Number.isInteger(arg2)){
          return undefined;
        }
    
    return arg1 + arg2;
    
      };
    } 
    return arguments[0] + arguments [1];
    
    }
