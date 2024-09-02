const allProductsUrl = 'https://course-api.com/javascript-store-products'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

// ========================================

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
}

const getStorageItem = (name, item) => {
  let storageItem = localStorage.getItem(name)
  if (storageItem) storageItem = JSON.parse(storageItem)
  else storageItem = []

  return storageItem
}

// ========================================

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  setStorageItem,
  getStorageItem,
}
