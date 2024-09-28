// Factory Functions
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(2);
// console.log(circle);

// Constructor Functions
function Circle(radius) {
  this.radius = radius,
  this.draw = function() {
    console.log('draw 1')
  }
}

const circle = new Circle(1);
console.log(circle.draw());