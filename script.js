const sum = (...args) => {
  return args.reduce((acc, cur) =>
    acc + cur)
}

console.log(sum([1, 2, 3, 4, 5]));