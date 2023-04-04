var countBits = function(n) {
    // Program Me
    let string = n.toString(2);
    let count = 0;
    for(let elem of string.split("")){
      if(elem == 1){
        count += 1;
      }
    }
    return count;
  };
