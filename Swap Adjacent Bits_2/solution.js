function solution(n) {
    return parseInt(helper(n), 2);
    //return ...;
  }
  function helper(num){
      let elem = num.toString(2);
    while(elem.length % 2 !== 0){
      elem = "0" + elem;
    }
    let str = "";
    for(let i = 0; i < elem.length; i+=2){
      let char = elem[i];
      let char2 = elem[i+1];
      str += char2;
      str += char;
    }
    return str;
  }
