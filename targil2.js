function isNotPrime(num) {
  if (num < 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true
  }
  return false
}

for (let index = 0; index < 237; index++) {
  if (!isNotPrime(index)) console.log(index);
}
