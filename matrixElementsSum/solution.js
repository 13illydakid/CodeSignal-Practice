function solution(matrix) {
    let count = 0;
    let blocker = [];
    for(let v = 0; v < matrix.length; v++){
        let arr = matrix[v];
        for(let j = 0; j < arr.length; j++){
            let num = arr[j];
            if(num === 0){
                blocker.push(j);
            } else if(blocker.indexOf(j) === -1){
                count += num;
            }
        }
    }
    return count;
}
