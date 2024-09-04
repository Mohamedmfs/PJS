const array = [null, 3, 4, 5, 8, 0];

const countTruthy = (array) => {
  let count = 0;

  array.forEach((array) => {
    
    if (array) {
      count++
    }
  })
}

console.log(countTruthy(array));