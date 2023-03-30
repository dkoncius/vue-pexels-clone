import { ref } from 'vue'

export function fetchPhotos(page, topic) {
  const data = ref([])

  const API = 'https://api.pexels.com/v1/search?query='
  const API_KEY = import.meta.VUE_APP_API_KEY;

  function doFetch() {
    fetch(`${API}${topic}?page=${page}&per_page=60`, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then((res) => res.json())
    .then((json) => {
      data.value.push(...json.photos)
    })
    .catch(err => console.log(err))
  }

  doFetch()

  return { data }
}