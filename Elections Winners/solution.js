function solution(votes, k) {
  let max = 0;
  let obj = {};
  for(let i = 0; i < votes.length; i++){
      let elem = votes[i];
      if(elem > max){
          max = elem;
      }
      if(obj[elem] === undefined){
          obj[elem] = 1;
      } else{
          obj[elem] += 1;
      }
  }
  let counter = 0;
  for(let v = 0; v < votes.length; v++){
      let num = votes[v];
      if((num + k) > max){
          counter += 1;
      }
  }
  if(k === 0 && obj[max] > 1){
      return 0;
  } else if(k === 0 && obj[max] === 1){
      return 1;
  } else{
      return counter;
  }
}
