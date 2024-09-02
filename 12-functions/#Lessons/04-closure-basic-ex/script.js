////////////////////////////
// *** Closure Example
////////////////////////////
function newAccount(name, initBalance) {
  let balance = initBalance

  // # inner function
  function showBalance() {
    console.log(`Hey ${name}, your balance is: ${balance}`)
  }
  return showBalance // # must have this
}

newAccount('susan', 500)() // *** run inner function

const john = new newAccount('john', 300)
const bob = new newAccount('bob', 100)

// # closure can remember all the info based on each user
john() // Hey john, your balance is: 300
bob() // Hey bob, your balance is: 100
