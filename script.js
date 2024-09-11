function Address(street, city, zipcode) {
  this.street = street,
  this.city = city,
  this.zipcode = zipcode
}

const newAddress1 = new Address('1999 Mlk Jr. Way S', 'Columbus', 43231);
const newAddress2 = new Address('1999 Mlk Jr. Way S', 'Columbus', 43231);

const areEqual = (newAddress1, newAddress2) => {
  return newAddress1.street === newAddress2.street && newAddress1.city === newAddress2.city && newAddress1.zipcode === newAddress2.zipcode
}

const areSame = (newAddress1, newAddress2) => {
  return newAddress1 === newAddress2;
}
console.log(areEqual(newAddress1, newAddress2));
console.log(areSame(newAddress1, newAddress2));

