// singleProductUrl = 'https://course-api.com/javascript-store-single-product' >>> muốn sử dụng thì thêm query param ?id='__id'

const allProductsUrl = 'https://course-api.com/javascript-store-products'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

export { allProductsUrl, singleProductUrl, getElement }
