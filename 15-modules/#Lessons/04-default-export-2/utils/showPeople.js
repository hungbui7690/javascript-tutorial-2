// Method 2: not recommend this method because it's hard to check error
export default (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person
      return `
    <p>${name} <strong>${job}</strong></p>
   `
    })
    .join('')
  console.log(newPeople)

  return newPeople // # must have this line
}

/**
 * Export with Array:
 * - export default [{name: 'abc'}]
 *
 * *** Remember there is only 1 export default in 1 file
 */
