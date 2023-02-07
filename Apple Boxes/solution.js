function solution(k) {
    let arr = [];
    let n = 1;
    while(n <= k){
        arr.push(n);
        n += 1;
    }
    //return arr;
    let yellow = 0;
    let red = 0;
    for(let i = 0; i < arr.length; i++){
        let elem = arr[i];
        if(elem % 2 === 0){
            red += (elem * elem);
        } else{
            yellow += (elem * elem);
        }
    }
    return red - yellow;
}
