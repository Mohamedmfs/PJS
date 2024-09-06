const array = [true, 1, 2, '', false,];

const countTruthy = (item) => {
  let count = 0;

  for (const value of array)
    if (value)
      count++;
  return count;
}

console.log(countTruthy(array));
