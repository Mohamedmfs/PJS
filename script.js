function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  }
}

const circle = new Circle(10);

circle.location = { a: 1, b: 2};

console.log(circle);
