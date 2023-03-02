function solution(n, m) {
    return 2 ** (helper(n, m));
  }
  function helper(num1, num2){
    let str1 = num1.toString(2);
    let str2 = num2.toString(2);
    if(str1.length < str2.length){
      while(str1.length !== str2.length){
        str1 = "0" + str1;
      }
    }
     if(str2.length < str1.length){
      while(str2.length !== str1.length){
        str2 = "0" + str2;
      }
    }
    let index;
    for(let i = 0; i < str1.length; i++){
      let char1 = str1[str1.length - (1+i)];
      let char2 = str2[str2.length - (1+i)];
      if(char1 === char2){
        index = i;
        break;
      }
    }
    return index;
  }
