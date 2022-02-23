module.exports = function reverse (n) {
  const newArr = n.toString().split('');
  const newArr2 = newArr.reverse().join('');
  return parseFloat(newArr2);
}
