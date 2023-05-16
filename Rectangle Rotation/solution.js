function solution(a, b) {
    let num1 = Math.floor(a / Math.sqrt(2));
    let num2 = Math.floor(b / Math.sqrt(2));
    let num3 = (num1 + 1) * (num2 + 1) + (num1 * num2);
    let num4 = (num3 % 2) + num3;
    return num4 - 1;
  }
