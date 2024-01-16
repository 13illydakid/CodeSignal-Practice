function solution(l, fares) {
  let cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  let bestIndex;
  for(let i = 0; i < fares.length; i++){
      let fare = fares[i];
      let cost = l * fare;
      if(cost <= 20){
          bestIndex = i;
      } else {
          break;
      }
  }
  return cars[bestIndex];
}
