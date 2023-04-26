function solution(nCols, nRows, col, row) {
    let cols = nCols - col + 1;
    let rows = nRows - row;
    return cols * rows;
}
