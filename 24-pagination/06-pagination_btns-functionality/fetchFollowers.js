const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

// * lưu ý: đây là async function >> sẽ return promise
const fetchFollowers = async () => {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export default fetchFollowers
