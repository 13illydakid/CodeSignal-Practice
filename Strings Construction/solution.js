function solution(a, b) {
   let aObj = {};
   for(let char of a.split("")){
       if(aObj[char] === undefined){
           aObj[char] = 1;
       } else{
           aObj[char] += 1;
       }
   }
   let count = 0;

}
