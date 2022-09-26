function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));

//rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum + 1){
    return [];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
};
 
