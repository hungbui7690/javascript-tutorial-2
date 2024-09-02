/*
  Spread Operator: 

  - Allow an iterable to spread/expand individually inside receiver

  - Split into single items and COPY them >> ko mutate 
  

*/

const udemy = 'udemy'
const letters = [...udemy]
console.log(letters) // [u, d, e, m, y]

/////////////////////////////
// ***
/////////////////////////////
const boys = ['john', 'bob', 'nathan']
const girls = ['susan', 'anna']
const bestFriends = 'arnold'

const friends = [...boys, bestFriends, ...girls]
console.log(friends) // ['john', 'bob', 'nathan', 'arnold', 'susan', 'anna']

/////////////////////////////
// REFERENCE >> MUTATE
/////////////////////////////
const newFriends1 = friends
newFriends1[0] = 'Karina'
console.log(newFriends1) // ['Karina', 'bob', 'nathan', 'arnold', 'susan', 'anna']
console.log(friends) // ['Karina', 'bob', 'nathan', 'arnold', 'susan', 'anna']

/////////////////////////////
// COPY >> NOT MUTATE
/////////////////////////////
const newFriends2 = [...friends]
newFriends2[0] = 'Nicky'
console.log(newFriends2) // ['Nicky', 'bob', 'nathan', 'arnold', 'susan', 'anna']
console.log(friends) // ['Karina', 'bob', 'nathan', 'arnold', 'susan', 'anna']
