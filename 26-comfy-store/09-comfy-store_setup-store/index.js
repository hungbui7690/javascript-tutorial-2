// global imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'

// specific import
import fethProducts from './src/fetchProducts.js'
import { setupStore, store } from './src/store.js'

const init = async () => {
  const products = await fethProducts()
  if (products) {
    setupStore(products)
    console.log(store) // log ở index.js mới ra kết quả, chứ log bên store.js ko ra
  }
}

window.addEventListener('DOMContentLoaded', init)
