const address = {
  street: '1999 Mlk Jr. Way S',
  city: 'Columbus',
  zipcode: 43231
}

const showAddress = (address) => {
  for (key in address) 
    console.log(key, address[key] )
}

console.log(showAddress(address));
