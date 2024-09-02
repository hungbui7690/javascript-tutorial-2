const URL = 'https://randomuser.me/api/'

const getUser = async () => {
  const res = await fetch(URL)
  const data = await res.json()
  const person = data.results[0] // vì có quá nhiều data, chúng ta sẽ ko sử dụng destructuring, mà sẽ làm line by line
  const { large: image } = person.picture
  const { phone, email } = person
  const { password } = person.login
  const { first, last } = person.name
  const {
    dob: { age },
  } = person
  const {
    street: { number, name },
  } = person.location

  // value return chỗ này phải match với value trong data-label trong javascript
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  }
}

export default getUser
