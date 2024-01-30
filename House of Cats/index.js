function solution(legs) {
  let array = [];
  let max = Math.floor(legs / 2);
  // array.unshift(max);
  let cat = 4;
  let human = 2;
  let catCount = 0;
  let humanCount = 0;
  let count = (max * human);

  let i = 0;
  while(i < max - 1){
      let num = legs - (i * human);
      if(num % cat === 0){
          array.push(i);
      }
      i += 1;
  }
  array.push(max);
  console.log(array);
  return array;
}
