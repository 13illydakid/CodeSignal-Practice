function solution(n) {
    const arr1 = [...Array(n)].map((_, idx) => [...Array(++idx)].map((_, idx) => ++idx).reduce((pre, val) => pre + !(idx % val), 0));
    const arr2 = arr1.map((_, idx) => arr1.slice(0, idx).reduce((pre, val) => pre + (val > arr1[idx]), 0));
    return [Math.max(...arr2), arr2.reduce((pre, val) => pre + (val === Math.max(...arr2)), 0)];

  }
