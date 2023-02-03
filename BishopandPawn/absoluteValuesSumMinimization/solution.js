function solution(a) {
    let closest;
    let index;
    for(let i = 0; i < a.length; i++){
        let value = 0;
        for(let j = 0; j < a.length; j++){
            value += Math.abs(a[j] - a[i]);
        }
        if(closest === undefined){
            closest = value;
            index = i;
        } else{
            if(value < closest){
                closest = value;
                index = i;
            }
        }
    }
    return a[index];
}
