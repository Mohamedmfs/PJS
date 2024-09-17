const products = [
  {name: 'Shirt', price: 20},
  {name: 'Shoes', price: 50},
  {name: 'Pants', price: 40},
]

const reduced = products.reduce((acc, cur) => {
  return acc + cur.price;
}, 0)

console.log(reduced);