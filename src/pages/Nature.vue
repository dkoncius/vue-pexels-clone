<script setup>
import Photos from '../components/Photos.vue'
import { fetchPhotos } from '../functions/fetchData';
import { watchEffect, ref, Transition, Suspense } from 'vue';
import Loader from '../components/Loader.vue';

let page = 0
const { data } = fetchPhotos(page, 'nature')
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
        <Loader v-if="!loaded"/>
        <Photos v-else-if="loaded" :data="data"/>
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
