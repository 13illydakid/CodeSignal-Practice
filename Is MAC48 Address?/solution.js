function solution(inputString) {
    let array = inputString.split("-");
    console.log(array);
    if(array.length !== 6){
        console.log(array.length);
        return false;
    }
    let accepted = "0123456789ABCDEF";
    for(let elem of array){
        if(elem.length !== 2){
            console.log(elem);
            return false;
        }
        for(let i = 0; i < elem.length; i++){
            let char = elem[i];
            if(!accepted.includes(char)){
                return false;
            }
        }
    }
    return true;
}
