const numbers = [1, -1, 2, 3, 4];

const filtered = numbers
.filter(n => n >= 1)
.map(n => ({ value: n }))
.filter(obj => obj.value > 2);

console.log(filtered);