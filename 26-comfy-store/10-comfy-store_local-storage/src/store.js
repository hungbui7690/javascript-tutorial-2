import { setStorageItem, getStorageItem } from '../src/utils.js'

// ========= store lúc này sẽ lấy từ getStorageItem()
let store = getStorageItem('store')

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product
    const image = img[0].thumbnails.large.url

    return { id, featured, name, price, company, colors, image }
  })

  // ========== setStorageItem()
  setStorageItem('store', store)
}

console.log(store)

export { store, setupStore }

// ====== cách export khác >>> sở dĩ ít sử dụng thằng này là vì để ở dưới sẽ dễ dàng quản lý code hơn
// export let store = []
// export const setupStore = (products) => {
// }
