const sum = (...ar) => {
  return ar.reduce((a, value) => a + value, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6));

const arr = [6, 89, 3, 45];
const spreaded = [...arr];
const maximus = Math.max(...arr);
console.log(spreaded);
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// swap
let x = 8, y = 6;
[x,y] = [y,x];
console.log(x);