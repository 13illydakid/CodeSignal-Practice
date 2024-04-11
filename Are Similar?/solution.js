function solution(a, b) {
  let array = [];
  for(let i = 0; i < a.length; i++){
      let nOne = a[i];
      let nTwo = b[i];
      if(nOne !== nTwo){
          array.push(i);
      }
  }
  if(array.length === 0){
      return true;
  } else if(array.length === 2){
      let [pointOne, pointTwo] = array;
      if(a[pointOne] === b[pointTwo] && a[pointTwo] === b[pointOne]){
          return true;
      } else {
          return false;
      }
  } else{
      return false;
  }
}
