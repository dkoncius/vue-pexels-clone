<script setup>
import Photos from '../components/Photos.vue'
import { fetchPhotos } from '../functions/fetchData';
import { watchEffect, ref, Transition, Suspense } from 'vue';
import Loader from '../components/Loader.vue';

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
    <Loader v-if="!loaded"/>
    <Photos v-else-if="loaded" :data="data" />
</template>
