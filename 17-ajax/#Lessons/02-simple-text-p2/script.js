/*
  Simple Text
  - responseText: this is the text that server responses

 */

const xhr = new XMLHttpRequest()

xhr.open('GET', './api/sample.txt') // ((1))

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement('p') // (2) create element with data on the fly
    text.textContent = xhr.responseText // (3)

    document.body.append(text) // (4) data from server will go here
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState,
    })
  }
}
xhr.send()

console.log('hello world') // this runs first since it's synchronous
