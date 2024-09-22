const haram = (principal , rate = 3.5, years = 5) => {
  return principal * rate / 100 * years;
}

console.log(haram(10000));
