<script setup>
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
import Photos from '../components/Photos.vue';
import { fetchPhotos } from '../functions/fetchData';
import Loader from '../components/Loader.vue';

const route = useRoute();
const term = ref(route.params.term);
const page = 0;
let { data } = fetchPhotos(page, term.value);
const loaded = ref(false);

watchEffect(() => {
  term.value = route.params.term;
  loaded.value = false;
  // Reinitialize the data by calling fetchPhotos again
  ({ data } = fetchPhotos(page, term.value));
  setTimeout(() => {
    loaded.value = true;
  }, 300);
});
</script>

<template>
  <Loader v-if="!loaded"/>
  <Photos v-else-if="loaded" :data="data" />
</template>
