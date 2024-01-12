function solution(matrix) {
  let obj = new Set();
  for(let i = 1; i < matrix.length; i++){
      let row = matrix[i];
      for(let j = 1; j < row.length; j++){
          let square = getFour(matrix, i, j);
          obj.add(square);
      }
  }
  console.log(obj);
  return obj.size;
}

function getFour(arrayArray, x, y){
  let array = [];
  array.push(arrayArray[x-1][y-1]);
  array.push(arrayArray[x][y-1]);
  array.push(arrayArray[x-1][y]);
  array.push(arrayArray[x][y]);
  return array.join("");
}
