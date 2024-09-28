// Factory Functions
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(2);
// console.log(circle);

// Constructor Functions
function Circle(radius) {
  this.radius = radius,
  this.draw = () => {
    if (radius === 1)
      console.log('it does equal to one!');
  }
}

const circle = new Circle(1);
console.log(circle.draw());