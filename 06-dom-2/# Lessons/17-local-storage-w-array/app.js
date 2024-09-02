/*
  Local Storage with Multiple Values
  - 2 methods: 
    + JSON.stringify()
    + JSON.parse()

  - data can be stored in the local storage in the form of string >> JSON.stringify() is used to convert the data to string 
  - in the opposite >> we use JSON.parse() to convert string back to array + object

*/

const friends = ['john', 'peter', 'nathan']

/////////////////////////
// Example 1: BAD
/////////////////////////
// localStorage.setItem('friends', friends) // * check devtools >> it won't be stored as array, but string
// const friendsLS1 = localStorage.getItem('friends')
// console.log(friendsLS1) // j >> now, it is not the array anymore, but string
// console.log(friendsLS1[0])

/////////////////////////
// Example 2: OK
/////////////////////////
// localStorage.setItem('friends', JSON.stringify(friends)) // ## we need to just JSON.stringify() to convert from array to string
// const friendsLS2 = JSON.parse(localStorage.getItem('friends')) // ## JSON.parse() to convert from string back to array
// console.log(friendsLS2)
// console.log(friendsLS2[0])

/////////////////////////
// Example 3:
/////////////////////////
let fruits
if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'))
} else {
  fruits = []
}
console.log(fruits)
fruits.push('apple')
fruits.push('orange')
localStorage.setItem('fruits', JSON.stringify(fruits))
