function solution(n) {
    let count = 0;
    let half = Math.ceil(n/2);
    for(let i = 1; i <= half; i++){
        let sum = i;
        let j = 1;
        while(sum < n){
            sum += (i+j);
            if(sum === n){
                count += 1;
            }
            j += 1;
        }
    }
    return count;
}
function helper(num){
    return num + 1;
}
