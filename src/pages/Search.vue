<script setup>
import Photos from '../components/Photos.vue'
import { fetchPhotos } from '../functions/fetchData';
import { watchEffect, ref, Transition, Suspense } from 'vue';
import Loader from '../components/Loader.vue';
import { searchValue } from '../functions/storeSearchValue';

let page = 0
const { data } = fetchPhotos(page, 'people');
const loaded = ref(false)

watchEffect(() => {
    if (data.value) {
        setTimeout(() => {
            loaded.value = true
        }, 300)
    }
})
</script>

<template>
<Transition name="bounce">
    <div v-if="!loaded">
        <Loader />
    </div>
    <div v-else-if="loaded">
        <Photos :data="data" />
    </div>
</Transition>
</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
  }

  @keyframes bounce-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
  }
</style>
