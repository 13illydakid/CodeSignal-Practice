// function solution(a) {
//     // if(a.length === 0){
//     //     return 0;
//     // }
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       sum += Number("" + a[i] + a[j]);
//     }
//   }

//   return sum;
// }

function solution(a) {
    let lowSum = 0;
    let offsetSum = 0;
    for(let i = 0; i < a.length; i++){
        lowSum += a[i];
        let size = a[i].toString().length;
        let offset = helper(10, size);
        offsetSum += offset;
    }
    return lowSum * a.length + lowSum * offsetSum;
}
function helper(base, power){
    let result = 1;
    for(let i = 1; i <= power; i++){
        result *= base;
    }
    return result;
}
