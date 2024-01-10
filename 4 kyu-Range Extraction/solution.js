function solution(list){
  // TODO: complete solution
   let sorted = list.sort((a,b)=>a-b);
   console.log(sorted);
   let string = "";
   for(let i = 0; i < sorted.length; i++){
     let curr = sorted[i];
     if(curr + 1 === sorted[i+1] && curr + 2 === sorted[i+2]){
       let j = 2;
       while(curr + j === sorted[i+j]){
         j += 1;
       }
 //       j -= 1;
       string += `${curr}-${sorted[i+j-1]},`;
       i += (j-1);
     } else {
       string += `${curr},`
     }
   }
   let result = string.slice(0, string.length-1);
   console.log(result);
   return result;
 }
