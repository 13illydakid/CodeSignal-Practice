function solution(l, r) {
    // const setObj = new Set();
    let counter = 0;
    let setObj = {};
    for(let i = l; i <= r; i++){
        let range = sumDigits(i);
        for(let j = 1; j <= range; j++){
            let add = i + j;
            if(add <= r){
                let string = `${i} ${add}`;
                if(setObj[string] === undefined){
                    setObj[string] = 1;
                    counter += 1;
                } else {
                    setObj[string] += 1;

                }
                // console.log(string);
                // setObj.add(string);
                // else if(setObj[string] === 1){
                //     setObj[string] += 1;
                // }
            }
            // let minus = i - j;
            // if(minus >= l){
            //     let string = `${i} ${minus}`;
            //     if(setObj[string] === undefined){
            //         setObj[string] = 1;
            //         counter += 1;
            //     } else if(setObj[string] === 1){
            //         setObj[string] += 1;
            //     } else {
            //         setObj[string] += 1;
            //     }
            //     // // console.log(string);
            //     // setObj.add(string);
            // }
        }
    }
    //return setObj.size;
    return counter;
}
function sumDigits(num){
    let count = 0;
    for(let elem of num.toString().split("")){
        count += eval(elem);
    }
    return count;
}
