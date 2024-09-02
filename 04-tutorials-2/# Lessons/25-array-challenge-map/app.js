/*
  Array Challenge: map()
    
    #### updatedStudents

    1. add role:'student' property to each object using MAP method
    2. assign to 'updatedStudents' variable and log

*/

console.log('students', students)

const updatedStudents = students.map(function (student) {
  console.log(student)
  student.role = 'student'
  return student
})
console.log('updatedStudents', updatedStudents)
