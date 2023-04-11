// function hamming (n) {
//   // TODO: Program me
//   let array = [];
//   let i = 1;
//   while(array.length < n){
//     if(checkHamming(i)){
//       array.push(i);
//     }
//     i += 1;
//   }
//   return array[array.length-1];
// }

// function checkHamming(num){
//   while(num % 5 === 0){
//     num = num / 5;
//   }
//   while(num % 3 === 0){
//     num = num / 3;
//   }
//   while(num % 2 === 0){
//     num = num / 2;
//   }
//   if(num == 1){
//     return true;
//   } else{
//     return false;
//   }
// }
function hamming (n) {
    var seq = [1 ];
    var i2 = 0, i3 = 0, i5 = 0 ;
    for ( var i = 1; i < n; i++ ) {
      var x = Math.min(2 * seq [i2], 3 * seq[i3], 5 * seq[i5]);
     seq. push(x);
     if (2 * seq[i2] <= x) i2++ ;   //<= can be replaced with ==
      if (3 * seq[i3] <= x) i3++ ;
      if (5 * seq[i5] <= x) i5++ ;
   }
   return seq[n-1 ];
 }
