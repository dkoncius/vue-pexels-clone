import { ref, toRaw } from 'vue'

const data = ref([])

export function useFetch(page) {
  const API = 'https://api.pexels.com/v1/curated'
  const API_KEY = '3GnrBc4JCTMSOPfXsli2LJek6wNKJ7AsUcczGlDjjVWscoW85aowv7x0'
 
  function doFetch() {
    // unref() unwraps potential refs
    fetch(API + `?page=${page}&per_page=15`, {
        headers: {
        Authorization: API_KEY
      }})
      .then((res) => res.json())
      .then((json) => {
        data.value.push(...json.photos) // Add new data to the existing array
      })
      .catch(err => console.log(err))
  }

  doFetch()

  return { data }
}