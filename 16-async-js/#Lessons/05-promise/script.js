/*
  Promises: 
  - Pending / Resolved / Rejected
  - then - catch >> pass another callback

  *** it's not that when we finish learning Promise, Async/Await; we can ignore callback
      >> we learn Promise just to eliminate Callback Hell

  - Example of Promise:
    + when we order food at the restaurant, there's no way for us to receive the food right away, but we need to wait (Pending)
    + After that:
      > we receive our food (RESOLVED) >> use .then()
      > there's no food, we must order the new one (REJECTED) >> use .catch()

*/

// (1)
const headingOne = document.querySelector('.one')
const headingTwo = document.querySelector('.two')
const headingThree = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {})

// (2) Promise >> new Promise (cb, cb) === new Promise(resolve(), reject())
const promise = new Promise((resolve, reject) => {
  const value = true // normally, value will be the result that server responses to us after we go to server and get data >> there's 2 results: successful or fail >> here we simulate true (success) /false (fail)
  if (value) {
    resolve({ success: true, data: ['test', 1, 2] })
  } else {
    reject(`error, value is false`)
  }
})

// (3)
console.log('promise: ', promise)

/*
  (4) if we want to access to success value >> use .then()
      > now we can access to data in resolve()
      > reject >> use .catch() to get error in reject()
*/
promise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => console.log(err))
