function XO(str) {
  const o = str.match(/o/gi);
  const x = str.match(/x/gi);
  console.log(o)
  console.log(x)
  return (!x || !o) ? false : x.length == o.length;
}

console.log(XO(''));