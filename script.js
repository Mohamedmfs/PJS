const arrayFromRange = (min, max) => {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}

console.log(arrayFromRange(12, 4));