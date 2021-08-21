function findMaxSum(arr: number[]) {
  const arrLength = arr.length;
  if (arrLength < 1) {
    return;
  } else {
    let including = arr[0];

    let excluding = 0;
    for (let i = 1; i < arrLength; i++) {
      let exclude_new = Math.max(including, excluding);
      including = excluding + arr[i];
      excluding = exclude_new;
      console.log(excluding, including, i);
    }
    return Math.max(including, excluding);
  }
}

const arr: number[] = [5, 5, 10, 100, 10, 5];

console.log(findMaxSum(arr));
