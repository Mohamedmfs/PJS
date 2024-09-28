// Factory Functions
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(2);
console.log(circle);

// Constructor Functions
// function Circle(radius) {
//   this.radius = radius,
//   this.draw = function() {
//     console.log('Hello World')
//   }
// }

// const circle = new Circle(3);

// console.log(circle);