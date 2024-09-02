/*
  String includes()
  - check if a string contains another string
  - case sensitive

  - x.includes(y) 
    > check if "y" includes in "x"

*/

////////////////////////////
// ***
////////////////////////////
const products = [
  { title: 'hight-back bench', company: 'ikea' },
  { title: 'albany table', company: 'marcos' },
  { title: 'accent chair', company: 'caressa' },
  { title: 'wooden table', company: 'ikea' },
]

////////////////////////////
// include(string, position)
////////////////////////////
const firstName = 'john'

const check1 = firstName.includes('oh') // true
const check2 = firstName.includes('Jo') // false
const check3 = firstName.includes('j', 1) // ## 2nd param: start from, default = 0 >> false
console.log(check1, check2, check3) // true false false

////////////////////////////
// Object
////////////////////////////
const product = {
  title: 'Leather Chair',
}

const result = product.title.includes('Leather')
console.log(result) // true

////////////////////////////
// *** use case: use to filter products
////////////////////////////
const search = 'table'
const filterProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search)
)
console.log(filterProducts) // [{…}, {…}]
