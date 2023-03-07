function solution(a, k) {
    let count = 0;
    for(let i = 0; i < a.length - 1; i++){
        let num1 = a[i];
        for(let j = 1; i+j < a.length; j++){
            let num2 = a[i+j];
            let total = num1 + num2;
            if(total % k === 0){
                count += 1;
            }
        }
    }
    return count;
}
