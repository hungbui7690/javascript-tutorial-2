/*
  Array Challenge: filter()
    
    #### highScores
    1. filter array and return only scores >= 80
    2. assign to 'highScores' variable and log

*/
console.log('students', students)
//////////////////////////////////////

// const highScores = students.filter(function (student) {
//   if (student.score >= 80) {
//     return student //  a value that coerces to true
//   }

//   if (student.score >= 80) return student
// })

//////////////////////////////////////
const highScores = students.filter(function (student) {
  return student.score >= 80
})
console.log(highScores)
