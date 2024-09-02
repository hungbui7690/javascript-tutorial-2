/*
  every - some

  - every - return true if all items match the condition

  - some - return true if at least one item matches the condition

 */

const grades = ['A', 'B', 'A', 'B', 'C']
const goodGrades = ['A', 'B', 'A', 'B']

////////////////////////////
// every() > return true if every items match the condition
////////////////////////////
const allGoodGrades1 = grades.every((grade) => grade !== 'C')
const allGoodGrades2 = goodGrades.every((grade) => grade !== 'C')
console.log('every: ', allGoodGrades1, allGoodGrades2) // false true

////////////////////////////
// some() > return true if AT LEAST 1 item matches the condition
////////////////////////////
const hasGoodGrades = grades.some((grade) => grade !== 'C')
console.log('some: ', hasGoodGrades) // true

const hasBadGrades1 = grades.some((grade) => grade === 'C')
const hasBadGrades2 = goodGrades.some((grade) => grade === 'C')
console.log('hasBadGrades: ', hasBadGrades1, hasBadGrades2) // true false
