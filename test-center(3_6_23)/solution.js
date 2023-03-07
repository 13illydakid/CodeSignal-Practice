function solution(a, b, k) {
    let array = [];
    for(let i = 0; i < a.length; i++){
        let x = a[i];
        let y = b[b.length - (1 + i)];
        let elem = x.toString() + y.toString();
        array.push(elem);
    }
    let count = 0;
    for(let num of array){
        let num1 = Number(num);
        if(num1 < k){
            count += 1;
        }
    }
    return count;
}
