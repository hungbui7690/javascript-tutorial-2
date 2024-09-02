/*
  Set: 
  - stores a collection of "unique" values of any type

    - new Set()
    - add(value)
    - delete(value)
    - clear()
    - has(value)

  - iterators
    > entries(), keys(), values(), forEach()

*/

////////////////////////////
// new Set()
////////////////////////////
const unique = new Set()
console.log(unique) // Set(0) {size: 0}

////////////////////////////
// add()
////////////////////////////
unique.add('first')
unique.add('second')
const random = 'third'
unique.add(random)
unique.add([1, 2, 3])
unique.add('first') // # duplication >> not store
unique.add(5)
unique.add(true)
console.log('unique: ', unique) // {'first', 'second', 'third', Array(3), 5, …}

////////////////////////////
// delete()
////////////////////////////
const delItem1 = unique.delete('third') // true
const delItem2 = unique.delete(1) // false

console.log('after delete: ', delItem1, delItem2, unique)

////////////////////////////
// has()
////////////////////////////
console.log('has: ', unique.has(5)) // true

////////////////////////////
// clear()
////////////////////////////
unique.clear()
console.log(unique) // Set(0) {size: 0}
