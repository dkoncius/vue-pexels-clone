import { ref, watchEffect } from 'vue'

export function fetchPhotos(page, topic = 'people') {
  const data = ref([])

  const API = 'https://api.pexels.com/v1/search?query='
  const API_KEY = import.meta.env.VITE_API_KEY;

  const doFetch = () => {
    data.value = [] // Clear existing data
    fetch(`${API}${topic}&page=${page}&per_page=60`, {
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

  watchEffect(() => {
    doFetch()
  }, [page, topic])

  return { data }
}