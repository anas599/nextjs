let obj = {};
let x = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
x.forEach((x, y) => {
  obj[x] = y + 1;
});

console.log(obj);
