// function solution(a) {
//     let obj = {};
//     let count = 0;
//     for(let i = 0; i < a.length; i++) {
//         let elem = a[i];
//         let group = nearestTenThousand(elem);
//         if(obj[group] === undefined){
//             obj[group] = 1;
//             count += 1;
//         }
//     }
//     return a.length + count;
// }
function solution(a) {
  let objSet = new Set();
  for(let i = 0; i < a.length; i++) {
      let elem = a[i];
      let group = nearestTenThousand(elem);
      objSet.add(group);
  }
  return a.length + objSet.size;
}

function nearestTenThousand(num) {
  if(num <= 10000) {
      return 1;
  }
  let hundreds = num % 10000;
  if(hundreds === 0) {
      return num / 10000;
  } else {
  let remainder = 10000 - hundreds;
  return (num + remainder) / 10000;
  }
}
