function solution(n) {
  let obj = {};

  while(n > 0) {
      let deduct = sumDigits(n);
      if(obj[deduct] === undefined){
          obj[deduct] = 1;
      } else {
          obj[deduct] += 1;
      }
      n -= deduct;
  }
  let max = 0;
  let maxCount = 0;
  for(let key in obj){
      if(obj[key] > maxCount){
          max = Number(key);
          maxCount = obj[key];
      } else if(obj[key] === maxCount && Number(key) > max){
          max = Number(key);
          maxCount = obj[key];
      }
  }
  return max;
}

function sumDigits(num) {
  let string = num.toString().split("");
  let count = 0;
  for(let elem of string) {
      count += Number(elem);
  }
  return count;
}
