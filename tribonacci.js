function tribonacci(signature, n) {
  var soma = 0;
  for (var index = (signature.length - 1), count = 0; signature.length >= n; index-- , count++) {
    soma += signature[index];
    if (signature.length >= n) {
      return signature.splice(0, n);
    }
    if (count == 2) {
      signature.push(soma);
      count = 0;
      index = (signature.length - 1);
    }
    return signature.splice(0, n);
  }
}

console.log(tribonacci([1, 1, 1], 1));