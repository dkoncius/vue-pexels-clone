import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
  const API = 'https://api.pexels.com/v1/curated'
  const API_KEY = '3GnrBc4JCTMSOPfXsli2LJek6wNKJ7AsUcczGlDjjVWscoW85aowv7x0'
  const data = ref(null)
  const error = ref(null)
  let loaded = ref(false)

  function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null

    // unref() unwraps potential refs
    fetch(API + `?page=1&per_page=15`, {
        headers: {
        Authorization: API_KEY
      }})
      .then((res) => res.json())
      .then((json) => {
        data.value = json
        console.log(json.photos)
      })
      .catch((err) => (error.value = err))
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doFetch()
  }

  return { data, error }
}