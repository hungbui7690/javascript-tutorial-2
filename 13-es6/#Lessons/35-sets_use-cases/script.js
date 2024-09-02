/*
  Sets - Use Case

*/

const products = [
  { title: 'hight-back bench', company: 'ikea' },
  { title: 'albany table', company: 'marcos' },
  { title: 'accent chair', company: 'caressa' },
  { title: 'wooden table', company: 'ikea' },
]
console.log('products:', products)

/////////////////////////////////
// Long Way
/////////////////////////////////
const companies = products.map((product) => {
  return product.company
})
console.log('companies: ', companies)

const uniqueCompanies = new Set(companies)
console.log('uniqueCompanies: ', uniqueCompanies)

const arrCompanies = ['super-store', ...uniqueCompanies]
console.log('arrCompanies: ', arrCompanies)

/////////////////////////////////
// Short Way
/////////////////////////////////
const result = [
  'super-store',
  ...new Set(products.map((product) => product.company)),
]
console.log('result: ', result)
