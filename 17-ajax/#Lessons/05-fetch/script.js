/*
  Fetch: built-in (browser), promised based
  - XHR is not wrong, but Fetch has cleaner syntax. The end result is the same

  - fetch().then() contains "Response" object 
    >> in that object, it has some important properties and methods that we need to remember

  - json() >> inside Prototype
    > convert response into json data
    > return promise >> must use .then() to get data

  *** Response.ok
  *** Response.json()

*/

const url = './api/people.json'

// (1) Example 1:
// const response = fetch(url)
// console.log(response) // returns promise

/////////////////////////////////////////////
// (2) Example 2: long way
// fetch(url)
//   .then((response) => {
//     console.log(response) // returns Response Object
//     return response.json()
//   })
//   .then((data) => {
//     console.log('data: ', data) // return real data
//   })
//   .catch((err) => {
//     console.log(err)
//   })

///////////////////////////////////////////////
// (3) Example 3: shorthand
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
