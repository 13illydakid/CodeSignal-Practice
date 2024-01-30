function solution(s) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let index = -1;
  for(let char of s.split("")){
      if(!letters.includes(char)){
          return false;
      }
      let i = letters.indexOf(char);
      if(i > index){
          index = i;
      } else{
          return false;
      }
  }
  return true;
}
