const url = './api/people.jsons'

///////////////////////////////
// Example 1: when the path is wrong >> the error in the log is not wrong path, but because of the line res.json() >> when working with fetch(), any err that sticks with network will count as error
///////////////////////////////
// SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

///////////////////////////////
// Example 2: so, if we remove res.json() line >> it won't show error anymore
///////////////////////////////
// fetch(url)
//   .then((res) => console.log(res))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
