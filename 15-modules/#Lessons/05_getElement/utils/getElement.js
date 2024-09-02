function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) return element

  throw new Error(`Selector: "${selection}" may not correct. Please check`)
}

export default getElement
