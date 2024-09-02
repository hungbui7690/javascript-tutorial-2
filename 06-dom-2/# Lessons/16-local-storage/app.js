/*
  Local Storage 
  - Web Storage API - provided by browser
  - 2 types of storage: 
    + session storage
    + local storage
  - localStorage methods:
    + setItem
    + getItem
    + removeItem
    + clear


  >> localStorage.setItem('name', 'value')
  >> sessionStorage.getItem('name', 'value')

  ><><>>> sessionStorage & localStorage are the same >> the difference is sessionStorage stores data based on session (close the tab / browser >> data will be gone) 
  ><><>>> check DevTools >> Application

  *** this will be used when we work with shopping cart >> users add items to their carts >> when they come back, the items they added before need to be there

*/

// *** run >> close the tab/browser >> comment the 2 below, the open open the new tab to check session
// localStorage.setItem('name', 'joe doe')
// sessionStorage.setItem('name', 'jason')

//////////////////////////////
localStorage.setItem('name', 'mark')
localStorage.setItem('name', 'peter') // ??? overwrite
localStorage.setItem('job', 'dev')
localStorage.setItem('address', 'usa')

const name = localStorage.getItem('name')
const job = localStorage.getItem('job')
console.log(name, job)

//////////////////////////////
// localStorage.removeItem('name')

//////////////////////////////
// localStorage.clear()
