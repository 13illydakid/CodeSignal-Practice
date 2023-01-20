function helper(row, col, matrix) {
    let count = 0;
    if (row - 1 >= 0) {
        if (matrix[row - 1][col]) {
            count += 1;
        }
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
        if (matrix[row - 1][col - 1]) {
            count += 1;
        }
    }
    if (row - 1 >= 0 && col + 1 < matrix[row].length) {
        if (matrix[row - 1][col + 1]) {
            count += 1;
        }
    }
    if (col - 1 >= 0) {
        if (matrix[row][col - 1]) {
            count += 1;
        }
    }
    if (col + 1 < matrix[row].length) {
        if (matrix[row][col + 1]) {
            count += 1;
        }
    }
    if (row + 1 < matrix.length) {
        if (matrix[row + 1][col]) {
            count += 1;
        }
    }
    if (row + 1 < matrix.length && col - 1 >= 0) {
        if (matrix[row + 1][col - 1]) {
            count += 1;
        }
    }
    if (row + 1 < matrix.length && col + 1 < matrix[row].length) {
        if (matrix[row + 1][col + 1]) {
            count += 1;
        }
    }
    return count;
}


function solution(matrix) {
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        let elem = matrix[i];
        let arr1 = [];
        for (let j = 0; j < elem.length; j++) {
            let num = helper(i, j, matrix);
            //console.log(num);
            //array[i][j] = num;
            arr1.push(num);
        }
        array.push(arr1);
    }
    return array;
}
