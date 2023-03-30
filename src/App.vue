<script setup>
import Images from './components/Images.vue'
import Loader from './components/Loader.vue'
import Favourites from './components/Favourites.vue'
import { useFetch } from './functions/fetch.js'

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

// Ifinity scroll
window.addEventListener('scroll', function(){
  const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if(endOfPage){
      page++
      useFetch(page)
    }
})

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
