<script setup>
import Loader from './components/Loader.vue'
import Favourites from './components/Favourites.vue'
import Header from './components/Header.vue'
import Topics from './components/Topics.vue'
import { fetchPhotos } from './functions/fetchData.js'

import { watchEffect, ref  } from 'vue';

let page = 0
const { data } = fetchPhotos(page)

// watchEffect(() => {
//   if (data.value) {
//     setTimeout(() => {
//       loaded.value = true
//     }, 1000)
//   }
// })

// Ifinity scroll
// window.addEventListener('scroll', function(){
//   const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
//     if(endOfPage){
//       page++
//       fetchPhotos(page)
//     }
// })

</script>

<template>
  <Header/>
  <Topics :data="data"/>
  <router-view></router-view>

 
</template>

<style>
/* Fontawesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Plus Jakarta Sans, roboto;
  user-select: none;
  cursor: url('./assets/arrow-pointer-solid.svg'), default;
}

body {
  background: linear-gradient(300deg, white, lightgray);
  min-height: 130vh;
}

</style>