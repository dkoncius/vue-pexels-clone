<script setup>
import Images from './components/Images.vue'
import { useFetch } from './components/Fetch.vue'
import Loader from './components/Loader.vue'
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
      console.log(page)
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
  <Images v-else-if="loaded" :data="data"/>
</template>

<style scoped>
</style>
