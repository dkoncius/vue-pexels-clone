<script setup>
import Images from './components/Images.vue'
import Loader from './components/Loader.vue'
import Favourites from './components/Favourites.vue'
import { useFetch } from './components/Fetch.vue'

import { watchEffect, ref, toRaw  } from 'vue';

let page = 0
const { data } = useFetch(page)
const loaded = ref(false)

watchEffect(() => {
  if (data.value) {
    setTimeout(() => {
      loaded.value = true
    }, 1000)
  }
})

console.log(toRaw(data.value))

// Load on scroll
window.addEventListener('scroll', function(){
  const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if(endOfPage){
      page++
      useFetch(page)
    }
})

const getPhoto = (photo) => {
    const limit = 15
    let title = ''
    let url = ''

    // If no alt text
    if(photo.alt){
    title = photo.alt
    } else {
    url = photo.url.slice(29, photo.url.length).split("-").join(" ")
    title = url
    }

    // If title to long
    if(title.length > limit) title = title.substring(0, limit) + "..."

    return {
        medium: photo.src.medium,
        large: photo.src.large2x,
        splice: photo.url.slice(29, photo.url.length).split("-").join(" "),
        title: title
    }
}

</script>

<template>
  <Loader v-if="!loaded"/>
  <div class="website" v-else-if="loaded">
    <Images :data="data" />
    <Favourites :data="data"/>
  </div>
 
</template>

<style scoped>
</style>
