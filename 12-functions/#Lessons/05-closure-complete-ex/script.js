/*
  Closure Complete Example
  - function that returns multiple function

  - In general, closure has these benefits:
    + can remember info depends on each instance
    + no one can access to variable balance from outside of function (except when using deposit(), withdraw(), showBalance())

*/

function newAccount(name, initBalance) {
  let balance = initBalance

  function showBalance() {
    console.log(`Hey ${name}, your balance is: ${balance}`)
  }

  function deposit(amount) {
    balance += amount
    showBalance()
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey ${name}, sorry, not enough funds`)
      return
    }
    balance -= amount
    showBalance()
  }

  // ~~ must have this >> return {}
  return {
    showBalance,
    deposit,
    withdraw: withdraw,
  }
}

////////////////////////////
// ***
////////////////////////////
const john = new newAccount('john', 300)
const bob = new newAccount('bob', 100)

john.deposit(500) // Hey john, your balance is: 800
bob.deposit(1000) // Hey bob, your balance is: 1100

john.withdraw(300) // Hey john, your balance is: 500
bob.withdraw(2000) // Hey bob, sorry, not enough funds

bob.balance = 5000
bob.showBalance() // ## cannot change balance >> Hey bob, your balance is: 1100
