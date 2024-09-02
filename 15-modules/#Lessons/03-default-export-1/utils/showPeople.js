// Method 1: Recommended
const showPeople = (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person
      return `
        <p>${name} <strong>${job}</strong></p>
      `
    })
    .join('')
  console.log(newPeople)

  return newPeople // # must have this >> otherwise, showPeople() will return undefined
}

export default showPeople
