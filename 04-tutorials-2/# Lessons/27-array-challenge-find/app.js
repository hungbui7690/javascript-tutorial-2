/*
  Array Challenge: find()
    
    #### specificId
    1. find specific id in array
    2. assign to 'specificId' variable and log

*/
console.log('students', students)

//////////////////////////////////////
const specificId = students.find(function (student) {
  return student.id === 4
})
console.log(specificId)

//////////////////////////////////////
const fruits = ['banana', 'orange', 'apple', 'kiwi']
const random = fruits.find(function (fruit) {
  return fruit === 'blackberry' // return undefined if there's no item
})

console.log(random)
