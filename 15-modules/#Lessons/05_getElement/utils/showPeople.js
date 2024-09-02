// * thêm param people + return

// cách 1: recommended
// const showPeople = (people) => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person
//       return `
//     <p>${name} <strong>${job}</strong></p>
//    `
//     })
//     .join('')
//   console.log(newPeople)

//   return newPeople // # phải có dòng này
// }

// export default showPeople // # default export

// ============ cách 2: ko nên dùng vì khó check lỗi
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

  return newPeople // # phải có dòng này
}

// ========= export với array >> lưu ý: chỉ có 1 export default trong 1 file
// export default [{name: 'abc'}]
