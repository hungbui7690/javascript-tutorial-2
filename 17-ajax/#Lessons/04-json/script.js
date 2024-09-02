/*
  JSON
  - JSON: Javascript Object Notation
  - JSON: double quotation mark for property name, and string value
    {
      "name" : "joe",
      "age" : 15
    }

  - data which is gotten from the server will be in the form of string 
    >> we need to use JSON.parse() 
    >> JSON.stringify()

*/

const btn = document.querySelector('.btn')

const url = './api/people.json' // (1) check this file

function getData(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText) // (2)

      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`
        })
        .join('')

      const element = document.createElement('div')
      element.innerHTML = displayData
      document.body.appendChild(element)
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      })
    }
  }
  xhr.send()
}

btn.addEventListener('click', () => {
  getData(url)
})
