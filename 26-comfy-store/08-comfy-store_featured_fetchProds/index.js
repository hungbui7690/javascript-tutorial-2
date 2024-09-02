// global imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'

// specific import
import fethProducts from './src/fetchProducts.js'

const init = async () => {
  const products = await fethProducts()
  console.log(products)
}

window.addEventListener('DOMContentLoaded', init)
