/*
  Array Challenge: reduce()
    
    #### averageScore
    1. sum up all student.score values with reduce
    2. divide by the length of the students array
    3. assign to 'averageScore' and log


*/
console.log('students', students)

//////////////////////////////////////
// ### averageScore
//////////////////////////////////////
const averageScore =
  students.reduce(function (scoresTotal, student) {
    // console.log(student)
    // console.log(scoresTotal)
    return scoresTotal + student.score
  }, 0) / students.length

console.log(averageScore)
