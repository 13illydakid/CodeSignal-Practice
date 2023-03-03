function solution(a0) {
    let count = 1;
    let array = [];
    let num = a0;
    while(!array.includes(num)){
            array.push(num);
        count += 1;
        let sum = 0;
        for(let elem of num.toString().split("")){
            sum += eval(elem + "**2");
        }
        num = sum;
    }
    return count;
}
