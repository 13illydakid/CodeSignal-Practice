function solution(lastNumberOfDays) {
    let array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let obj = {};
    for(let i = 0; i < array.length; i++){
        let elem = array[i];
        if(elem === lastNumberOfDays){
            let num;
            if(i + 1 === array.length){
                num = array[0];
            } else{
                num = array[i+1];
            }
            if(!obj[num]){
                obj[num] = 1;
            }
        }
    }
    let arr = [];
    for(let key in obj){
        let number = Number(key);
        arr.push(number);
    }
    return arr.sort((a,b)=>{
        return a-b;
    });
}
