/*
  # Check file src/store.js >> alt export syntax: 
   export let store = []
   export const setupStore = (products) => {}

   Tại sao chúng ta muốn sử dụng local storage? 
   - Vì hiện tại chúng ta có thể access tới products trong index file >>> nhưng chúng ta cũng muốn access tới products trong Products page >>> Hiện tại chúng ta chạy init() ở index.js >> nếu muốn lấy ra products ở Products page thì chúng ta phải invoke init() ở Products >> invoke 2 lần >> như vậy ko ổn
    

*/

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
