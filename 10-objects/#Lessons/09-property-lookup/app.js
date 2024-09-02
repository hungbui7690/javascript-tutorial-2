/*
  Property Lookup
  - if child does not have >> lookup in parent
  - everything in JS is an object

*/

function Account(name, initBalance) {
  this.name = name
  this.balance = initBalance
  this.bank = 'Bank of America' // (1) NOT IN PROTOTYPE
}

Account.prototype.bank = 'CHASE' // (2) IN PROTOTYPE
Account.prototype.deposit = function (amount) {
  this.balance += amount
  console.log(`Hello, ${this.name}, your balance is ${this.balance}`)
}

/*
  Account
    name
    balance
    bank: 'Bank of America'
    
    Prototype
      bank : 'CHASE'
      deposit : f
*/

const john = new Account('john', 500)
const bob = new Account('bob', 0)

console.log('john.bank: ', john.bank) // *** "Bank of America" >> if bank is inside instance >> no need to lookup inside prototype
console.log('john: ', john)
john.deposit(300)
console.log('john: ', john)
bob.deposit(1000)

/////////////////////////////
console.log('///////////////')
/////////////////////////////
// because of lookup, it can inherits properties and methods >> we can lookup and see constructor: Object() >> everything can lookup to Object Constructor
console.log({}) // {}
console.log([]) // []
