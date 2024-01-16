function solution(divisors, k) {
  let objFriends = {};

  for(let i = 1; i < k; i++){
      for(let j = i+1; j <= k; j++){
          let decision = true;
          for(let div of divisors){
              let checkI = (i % div === 0);
              let checkJ = (j % div === 0);
              if(checkI !== checkJ){
                  decision = false;
              }
          }
          if(decision){
              objFriends[i] = j;
          } else{
              console.log("checker");
              continue;
          }
      }
  }
  console.log(objFriends);
  let array = [];
  let uniques = new Set();
  for(let key in objFriends){
      let val = objFriends[key];
      uniques.add(val);
      array.push(Number(key));
      array.push(val);
  }
  console.log(uniques.size);
  let count = 0;
  let num = 1;
  while(num <= k){
      if(!array.includes(num)){
          count += 1;
      }
      num += 1;
  }
  return uniques.size + count;
}
