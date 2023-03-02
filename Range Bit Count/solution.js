function solution(a, b) {
    let count = 0;
    while(a <= b){
        let elem = a.toString(2);
        console.log(elem);
        console.log(typeof elem);
        for(let char of elem.split("")){
            if(char === "1") count += 1;
        }
        a += 1;
    }
    return count;
}
