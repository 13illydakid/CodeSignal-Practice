function solution(coins, price) {
  let count = 0;
  for(let i = coins.length-1; i >= 0; i--) {
      let elem = coins[i];
      if(price === 0){
          break;
      }
      if(price / elem >= 1){
          count += Math.floor(price/elem);
          price = (price % elem);
      }
  }
  return count;
}
