function solution(deposit, rate, threshold) {
    let count = 0;
    while(deposit < threshold){
        count += 1;
        deposit *= ((1) + (rate/100));
        if(deposit >= threshold){
            return count;
        }
    }
}
