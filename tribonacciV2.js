function tribonacci(signature, n) {
  var soma = 0, count = 0;
  if (signature.length == n) {
    return [...signature];
  }
  signature.map(function(value) {
    soma += value;
    count += 1;
    if (count == 3) {
      signature.unshift(soma);
      soma = 0; count = 0;
      tribonacci(signature, n);
    }
  });
}

console.log(tribonacci([1, 1, 1], 10));