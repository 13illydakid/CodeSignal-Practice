function solution(image) {
    let array = [];
    for(let i = 1; i < image.length - 1; i++){
        let elem = image[i];
        let innerArray = [];
        for(let v = 1; v < elem.length - 1; v++){
            let value = findMiddle(image, i, v);
            innerArray.push(Math.floor(value));
        }
        array.push(innerArray);
    }
    return array;
    function findMiddle(arr, c, d){
        return (arr[c][d] + arr[c-1][d-1] + arr[c-1][d] + arr[c-1][d+1] + arr[c][d+1] + arr[c][d-1] + arr[c+1][d-1] + arr[c+1][d] + arr[c+1][d+1]) / 9;
    }
}
