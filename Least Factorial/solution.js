function solution(n) {
    let i = 1;
    let count = 1;
    while(count < n){
        count *= i;
        i += 1;
    }
    return count;
}
