let store = []

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product
    const image = img[0].thumbnails.large.url

    return { id, featured, name, price, company, colors, image }
  })
}

// console.log(store) // thằng này ra empty [] bởi vì chúng ta chỉ tạo ra function, chứ ko gọi nó ở đây, mà gọi bên index.js

export { store, setupStore }
