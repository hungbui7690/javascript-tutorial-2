/*
  ES6 Classes - Syntactic Sugar 

*/

class Account {
  constructor(name, initBalance) {
    this.name = name
    this.balance = initBalance
  }

  bank = 'CHASE' // *** NOT IN PROTOTYPE

  // *** IN PROTOTYPE
  deposit(amount) {
    this.balance += amount
    console.log(`Hello, ${this.name}, your balance is ${this.balance}`)
  }
}

const john = new Account('john', 0)
john.deposit(500)
console.log(john)

const bob = new Account('bob', 200)
bob.deposit(300)
console.log(bob)
