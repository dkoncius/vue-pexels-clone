<script setup>
import Images from './components/Images.vue'
import { useFetch} from './components/Fetch.js'
import { watchEffect, ref, toRaw  } from 'vue';

let page = 0
const { data } = useFetch(page)
const loaded = ref(false)

watchEffect(() => {
  if (data.value) {
    loaded.value = true
   
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
  <h1 v-if="!loaded">{{loaded}}</h1>
  <Images v-else-if="loaded" :data="data"/>
  <!-- <div class="photos">
    <div class="photos" v-for="photo in data" :set="photo = getPhoto(photo)">
      <img v-if="photo.large" :src="photo.large" :alt="photo.title" />
      <img v-else="photo.medium" :src="photo.medium" :alt="photo.title" />
      <div class="photo_content">
        <h2>{{photo.title}}</h2>
        <hr>
        <button>Favourite</button>
      </div>
    </div> -->


    <!-- <div class="photo" v-for="photo in data.value" :set="photo = getPhoto(photo)">
   <img v-if="photo.large" :src="photo.large" :alt="photo.title" />
   <img v-else="photo.medium" :src="photo.medium" :alt="photo.title" />
   <div class="photo_content">
     <h2>{{photo.title}}</h2>
     <hr>
     <button>Favourite</button>
   </div>
 </div> -->
</template>

<style scoped>
</style>
