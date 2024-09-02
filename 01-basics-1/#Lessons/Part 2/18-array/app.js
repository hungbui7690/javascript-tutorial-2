/*
  Arrays, Functions and Objects
  - []
  - 0 index based

*/

const friend1 = 'anna'
const friend2 = 'peter'
const friend3 = 'jack'
const friend4 = 'susy'

const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null] // use to group data

let bestFriend = friends[2] // index based
friends[4] = 'anna' // *** modify item in array
console.log(friends)
console.log(friends[4]) // anna
console.log(friends[10]) // undefined

console.log(bestFriend) // bob

console.log(friends[3]) // susy
