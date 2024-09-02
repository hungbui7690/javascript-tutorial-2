const paginate = (followers) => {
  const itemsPerPage = 9
  const numberOfPage = Math.ceil(followers.length / itemsPerPage)

  /*
  Array.from({ length: 9 }) sẽ tạo ra array có 9 items đều có value là undefined >>> trong trường hợp này, chúng ta muốn loop 9 lần nhưng thằng followers ko có con số 9, nên chúng ta dùng cái này

  Array.from({length: 5}, (v, i) => i); >>>  [0, 1, 2, 3, 4]
  >> the value of `v` below will be `undefined` >> đây là từ MDN
  */
  const newFollowers = Array.from({ length: numberOfPage }, (_, index) => {
    // ===== dòng start và return sẽ lấy ra số lượng elements ở mỗi page
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
