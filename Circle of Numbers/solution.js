function solution(n, firstNumber) {
    let num = n / 2;
    if(firstNumber + num > n){
        return firstNumber - num;
    } else if(firstNumber + num === n){
        return 0;
    } else{
        return firstNumber + num;
    }
}
