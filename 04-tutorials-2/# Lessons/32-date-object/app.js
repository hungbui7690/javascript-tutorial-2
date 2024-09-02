// Date

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

let date = new Date()
console.log('date: ', date) // Sat Mar 16 2024 02:29:46 GMT-0600 (Mountain Daylight Time)

date = new Date('1/12/2004')
const month = date.getMonth()
console.log('month: ', months[month]) // January

const day = date.getDay()
console.log('day: ', days[day]) // Monday

console.log(date.getDate()) // 12
console.log(date.getFullYear()) // 2004

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}` // Monday, 12 January 2004

document.body.innerHTML = sentence
