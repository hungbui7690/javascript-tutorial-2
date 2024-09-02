// global imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'

// specific imports
import { store } from '../store.js'
import display from '../displayProducts.js'
import { getElement } from '../utils.js'

display(store, getElement('.products-container'))
