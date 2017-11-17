function digPow(n, p){
  var digits = n.toString().split('');
  // console.log(n.toString());
  for (var i = 0; i<digits.length; i++){
    // console.log(digits[i]);
    digits[i] = Number(digits[i]);
    // console.log(digits[i]);
  }
  // console.log(digits);

  var nTotal = 0
  for(var j = 0; j < digits.length; j++){
    nTotal += Math.pow(digits[j], p+j);
    console.log(digits[j]);
    console.log(p+i);
    console.log(nTotal);
    console.log('----------------------------');
  }

  for(var k = 0; k <= nTotal; k++){
    if(n*k === nTotal){
      return k
    }
  }

  return -1
}

console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(46288, 3));
