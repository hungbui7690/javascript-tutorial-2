/*
  AJAX HTTP API
  - AJAX Request = HTTP Request >> make our app becomes more dynamic
    > instead of hard code everything in HTML >> we get data from external resource which is called API

  - API: 
    
    > instruction that how we can communicate
      > remember when we work with closure >> we have some rules that we use to deposit/withdraw money >> API is the same >> we just can use the instruction from the API to get the data
    > specific rules that we can use to communicate with server
    > server will provide us specific URL that we can use to get data, or another URL to add/update/delete data


  ///////////////////////////////////

  Simple Text
  - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  
  - api/ folder >> we will use this folder to mimic the server 

  - xhr.open()
      open(method, url)
      open(method, url, async)
      open(method, url, async, user)
      open(method, url, async, user, password)

    + when we open url http://localhost:5500/01_simple-text/api/sample.txt
      > we make a GET request
      > later, we must open URL from the link to see the data structure

  - onreadystatechange: property defines a function to be executed when the readyState changes, contains the event handler to be called when the readystatechange event is fired
    
  - readyState: 
      0	UNSENT	            Client has been created. open() not called yet.
      1	OPENED	            open() has been called.
      2	HEADERS_RECEIVED	  send() has been called, and headers and status are available.
      3	LOADING	            Downloading; responseText holds partial data.
      4	DONE	              The operation is complete.

  - status: just remember the last 2 statuses > status = 200
      UNSENT: 0
      OPENED: 0
      LOADING: 200
      DONE: 200
 */

// (1)
const xhr = new XMLHttpRequest()
console.log('xhr: ', xhr)

// (2)
xhr.open('GET', './api/sample.txt')

// (4)
xhr.onreadystatechange = () => {
  console.log('onreadystatechange: xhr: ', xhr)

  // (a)
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(`done`)
  } else {
    // (b)
    console.log({
      status: xhr.status,
      text: xhr.statusText,
    })
  }
}

// (3)
xhr.send()
