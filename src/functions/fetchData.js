import { ref, toRaw } from 'vue'

export function fetchPhotos(page, topic = 'birds') {
  const data = ref([])

  const API = 'https://api.pexels.com/v1/search?query='
  const API_KEY = '3GnrBc4JCTMSOPfXsli2LJek6wNKJ7AsUcczGlDjjVWscoW85aowv7x0'

  function doFetch() {
    fetch(`${API}${topic}?page=${page}&per_page=3`, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then((res) => res.json())
    .then((json) => {
      data.value.push(...json.photos)
      console.log(toRaw(data.value))
    })
    .catch(err => console.log(err))
  }

  doFetch()

  return { data }
}