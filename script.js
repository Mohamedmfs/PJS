const showPrimes = (limit) => {
  for (let i = 2; i <= limit; i++) {

    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (j % i === 0)
        isPrime = false;
        break;
    }
    if (isPrime)
      console.log(i)
  }
}

showPrimes(20);