// global imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'

// specific imports
import { store } from '../store.js'
import display from '../displayProducts.js'
import { getElement } from '../utils.js'

// filters imports
import setupSearch from '../filters/search.js'

const loading = getElement('.page-loading')

display(store, getElement('.products-container'))
setupSearch(store)

loading.style.display = 'none'
