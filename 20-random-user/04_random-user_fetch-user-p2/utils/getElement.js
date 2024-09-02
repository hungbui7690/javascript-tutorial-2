const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element

  throw new Error(`Selector ${selector} is wrong!! No element is selected!!`)
}

export default getElement
