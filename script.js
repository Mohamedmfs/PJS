function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0)
}

console.log(sum(100, 2, 3, 4, 5));