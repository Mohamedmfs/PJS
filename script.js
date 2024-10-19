function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  }
}

const circle = new Circle(9);
console.log(circle);