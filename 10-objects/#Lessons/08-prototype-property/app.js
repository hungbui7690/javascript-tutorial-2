/*
  *** Prototypal Inheritance Model

  - Javascript uses prototypal inheritance model. 
    > That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. 

  - So any properties and methods or prototype can be accessed by every instance. 

  - Prototype property returns an object 

  *** we should put the important properties, methods inside the prototype in constructor >> so that they does not copy to a new instance
    
*/

/*
//////////////////////////////
  Scenario 1: we work in the bank 
//////////////////////////////
  - create a constructor function for every customer of the bank
  
  *** below example, when we log out 2 instances, we can see that each of them has deposit()
      >> now, we just have 2 customers, but in the real world, we will have much more >> that's why we need to use "prototype property"
  
*/
// function Account(name, initBalance) {
//   this.name = name
//   this.balance = initBalance
//   this.deposit = function (amount) {
//     this.balance += amount
//     console.log(`Hello, ${this.name}, your balance is ${this.balance}`)
//   }
// }

// const john = new Account('john', 500)
// const bob = new Account('bob', 0)

// console.log(john)
// console.log(bob)

// console.log(Account.prototype) // {} >> does not have anything

//////////////////////////////
// Scenario 2: use prototype >> each account has a bank >> put into prototype
//////////////////////////////
// (1) we don't put deposit() in constructor fn
function Account(name, initBalance) {
  this.name = name
  this.balance = initBalance
}

// (2) put bank property inside prototype
Account.prototype.bank = 'CHASE' // log >> we can see every prototype has "bank" property
// (3) put deposit method inside prototype
Account.prototype.deposit = function (amount) {
  this.balance += amount
  console.log(`Hello, ${this.name}, your balance is ${this.balance}`)
}

// (4)
const john = new Account('john', 500)
const bob = new Account('bob', 0)

console.log(john.bank) // *** can access easily
console.log(john) // *** can see property "bank" in Prototype

john.deposit(300)
console.log(john)

// (5)
bob.balance = 1000 // *** still can access/modify "balance" property
console.log(bob)
