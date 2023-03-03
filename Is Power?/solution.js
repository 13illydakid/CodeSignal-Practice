function solution(n) {
    let base = 2;
    let number = n;
    while(number >= 2){
        number = (n**(1/base)).toFixed(2);
        let max = Math.ceil(number);
        let min = Math.floor(number);
        console.log(number);
        console.log(max);
        console.log(min);
        // if(number === max && number === min){
        //     return true;
        // }
        if(max === min){
            return true;
        }
        base += 1;
    }
    //return false;
    return n === 1;
    // let num = 125;
    // console.log((num**(1/3)).toFixed(1));
}
