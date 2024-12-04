
const numbers = [0, 13, ,0 ,22, 0, 4, 0, 5];
let count = 0;
numbers.forEach(num => {
  count += num === 0 ? 1 : 0
});
console.log('Zero appears ' + count + ' time in array');