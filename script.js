const courses = [
  {id: 1, name: 'c'},
  {id: 2, name: 'b'},
  {id: 3, name: 'a'}
]

const course = courses.find((course) => {
  return course.id === 3;
})

console.log(course);