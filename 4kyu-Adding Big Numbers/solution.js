function add(a, b) {
    //return (Number(a) + Number(b)).toString(); // Fix me!
  //   console.log(eval(`${a} + ${b}`).toFixed());
  //   let string = eval(`${a} + ${b}`).toFixed().toString();
  //   if(string.indexOf("e+") === -1){
  //     return string;
  //   } else{
  //     string = string.replace(".", "").split("e+").reduce(function(a, b){
  //       return a + Array(b - a.length+2).join(0);
  //     });
  //   }
  //   if(Number(string) > 0){
  //     string += "." + Array(Number(string)+1).join(0);
  //   }
  //   console.log(string);
  //   return string;
        var result = ''
      var carry = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || carry) {
      carry += ~~a.pop() + ~~b.pop()
      result = carry % 10 + result
      carry = carry > 9
    }
    return result
  }
