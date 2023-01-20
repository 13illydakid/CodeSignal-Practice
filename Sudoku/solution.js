function solution(grid) {
    let arr = [];

    for(let i = 0; i < grid.length; i+=3){
        let first = [grid[i][0], grid[i][1], grid[i][2],
                     grid[i+1][0], grid[i+1][1], grid[i+1][2],
                     grid[i+2][0], grid[i+2][1], grid[i+2][2]];
        arr.push(first.sort().join(""));
        let second = [grid[i][3], grid[i][4], grid[i][5],
                     grid[i+1][3], grid[i+1][4], grid[i+1][5],
                     grid[i+2][3], grid[i+2][4], grid[i+2][5]];
        arr.push(second.sort().join(""));
        let third = [grid[i][6], grid[i][7], grid[i][8],
                     grid[i+1][6], grid[i+1][7], grid[i+1][8],
                     grid[i+2][6], grid[i+2][7], grid[i+2][8]];
        arr.push(third.sort().join(""));
    }
    for(let v = 0; v < grid.length; v++){
        let across = [grid[v][0], grid[v][1], grid[v][2],
                     grid[v][3], grid[v][4], grid[v][5],
                     grid[v][6], grid[v][7], grid[v][8]];
        arr.push(across.sort().join(""));
        let down = [grid[0][v], grid[1][v], grid[2][v],
                     grid[3][v], grid[4][v], grid[5][v],
                     grid[6][v], grid[7][v], grid[8][v]];
        arr.push(down.sort().join(""));
    }
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers = numbers.join("");
    console.log(numbers);
    console.log(arr);
    let counter = 0;
    for(let j = 0; j < arr.length; j++){
        let elem = arr[j];
        if(parseInt(elem) !== parseInt(numbers)){
            //console.log(j);
           counter += 1;
        }
    }
    console.log(counter);
    if(counter === 0){
        return true;
    } else{
        return false;
    }
   // console.log(arr);
}
