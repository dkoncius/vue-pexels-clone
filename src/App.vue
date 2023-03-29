<script setup>
import Images from './components/Images.vue'
import { useFetch} from './components/Fetch.js'
import { watchEffect, ref  } from 'vue';
const { data } = useFetch('...')
const loaded = ref(false)

watchEffect(() => {
  if (data.value) {
    loaded.value = true
  }
})

</script>

<template>
  <h1 v-if="!loaded">{{loaded}}</h1>
  <Images v-else-if="loaded" :data="data"/>
</template>

<style scoped>
</style>
